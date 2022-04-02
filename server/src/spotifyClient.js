var SpotifyWebApi = require('spotify-web-api-node');

const redirectUri = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000/spotify/callback' : 'https://clefproject.herokuapp.com/spotify/callback'

const spotifyApi = new SpotifyWebApi({
    clientId: 'b26491d4a12f481f9c8cd979e7151646',
    clientSecret: '0877bb4b043b472f8ff367700b27a08b',
    redirectUri,
});

module.exports = { spotifyApi };
