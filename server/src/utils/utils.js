const axios = require('axios');

const errorHandler = (err, _, res, __) => {
  console.log(err);
  res.status(500).json(err);
};

async function getDeezerUser(access_token) {
  const url = 'https://api.deezer.com/user/me'
  const { data: user } = await axios({
    method: 'get',
    url,
    params: {
      output: 'json',
      access_token,
    }
  });
  return user;
}

async function deezerAddTracksToPlaylist(access_token, playlistId, trackIds) {
  const url = `https://api.deezer.com/playlist/${playlistId}/tracks`;
  const { data } = await axios({
    method: 'post',
    url,
    params: {
      request_method: 'POST',
      access_token,
      songs: trackIds.join(','),
    },
    data: {
      songs: trackIds.join(','),
    }
  });
  return data;
}

async function getDeezerUserPlaylists(userId) {
  const url = `https://api.deezer.com/user/${userId}/playlists`;
  const { data: playlists } = await axios({
    method: 'get',
    url,
    params: {
      output: 'json',
    }
  });
  return playlists;
}

const sanitizeName = name => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ *\([^)]*\) */g, "");
}

const serializeSpotifySearchQuery = (trackName, artistName) => `track:${sanitizeName(trackName)} artist:${sanitizeName(artistName)}`

module.exports = {
  getDeezerUser,
  sanitizeName,
  deezerAddTracksToPlaylist,
  getDeezerUserPlaylists,
  errorHandler,
  serializeSpotifySearchQuery,
}