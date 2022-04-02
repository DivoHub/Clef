const { Router } = require('express');
const { spotifyApi } = require('../spotifyClient');
const { sanitizeName, getDeezerUser, serializeSpotifySearchQuery } = require('../utils/utils');
const deezerApi = require('deezer-public-api');

const deezer = new deezerApi();
const router = Router();

router.get('/me', async (req, res) => {
  const { deezerToken } = req.query;
  const user = await getDeezerUser(deezerToken);
  return res.json(user);
});

router.get('/playlists', async (req, res) => {
  const { deezerToken } = req.query;

  // fetch playlists for user
  const { id: userId } = await getDeezerUser(deezerToken);
  const resp = await deezer.user.playlists(userId);
  return res.json(resp);
});

router.get('/transfer/:deezerPlaylistId/:spotifyPlaylistId', async (req, res) => {
  const { spotifyPlaylistId, deezerPlaylistId } = req.params;

  // Get the names tracks in the playlist from deezer
  const playlistTracks = await deezer.playlist.tracks(deezerPlaylistId);
  const trackNames = playlistTracks.data.map(pt => serializeSpotifySearchQuery(pt.title_short, pt.artist.name));

  // Search for tracks in spotify
  const spotifyTracks = await Promise.all(
    trackNames.map(async query => {
      const { body } = await spotifyApi.searchTracks(query);
      return body.tracks.total > 0 ? `spotify:track:${body.tracks.items[0].id}` : null;
    })
  );
  const spotifyTrackIds = spotifyTracks.filter(t => t !== null);

  // Add tracks to spotify playlist
  const data = await spotifyApi.addTracksToPlaylist(spotifyPlaylistId, spotifyTrackIds);
  return res.json(data);
});

module.exports = router;