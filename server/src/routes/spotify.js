const { Router } = require('express');
const { spotifyApi } = require('../spotifyClient');
const { sanitizeName, getDeezerUser, deezerAddTracksToPlaylist } = require('../utils/utils');
const deezerApi = require("deezer-public-api");

const deezer = new deezerApi();
const router = Router();

router.get('/me', async (req, res) => {
  try {
    const me = await spotifyApi.getMe();
    return res.json(me.body);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.get('/playlists', async (req, res) => {
  const me = await spotifyApi.getMe();
  const data = await spotifyApi.getUserPlaylists(me.body.id)
  return res.json(data.body);
});

router.get('/transfer/:spotifyPlaylistId/:deezerPlaylistId', async (req, res) => {
  const { spotifyPlaylistId, deezerPlaylistId } = req.params;
  const { deezerToken } = req.query;

  // Get the names tracks in the playlist from spotify
  const playlistTracks = await spotifyApi.getPlaylistTracks(spotifyPlaylistId, {
    offset: 0,
    limit: 100,
    fields: 'items'
  });
  // sanitize names and get search deezer query for each song
  const trackNames = playlistTracks.body.items.map(i => {
    const { track } = i;
    const { album: { artists } } = track;
    return `${sanitizeName(i.track.name)} ${sanitizeName(artists[0].name)}`
  });

  // get first match for deezer results
  const deezerTracks = await Promise.all(
    trackNames.map(async query => {
      const { data, total } = await deezer.search.track(query);
      return total > 0 ? data[0].id : null
    })
  )
  // extract track ids
  const deezerTrackIds = deezerTracks.filter(t => t !== null);

  // add tracks to deezer playlist
  const data = deezerAddTracksToPlaylist(deezerToken, deezerPlaylistId, deezerTrackIds);

  return res.json({ added: data });
});

module.exports = router;