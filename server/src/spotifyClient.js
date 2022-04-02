var SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'b26491d4a12f481f9c8cd979e7151646',
    clientSecret: '0877bb4b043b472f8ff367700b27a08b',
    redirectUri: 'http://localhost:5000/spotify/callback'
});

module.exports = { spotifyApi };
