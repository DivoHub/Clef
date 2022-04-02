const { Router } = require('express');
const { spotifyApi } = require('../spotifyClient');

const axios = require('axios');

const dzAppId = 534762
const dzSecretKey = "67bab13be396522522de17ea6cd4b5c5"
const dzRedirectUri = 'http://localhost:5000/deezer/callback';

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
];

const router = Router();

router.get('/spotify/login', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

router.get('/spotify/callback', (req, res) => {
  const error = req.query.error;
  const code = req.query.code;

  if (error) {
    return res.json(error);
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      console.log('access_token:', access_token);
      console.log('refresh_token:', refresh_token);

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      );
      res.send('Success! You can now close the window.');

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body['access_token'];

        console.log('The access token has been refreshed!');
        console.log('access_token:', access_token);
        spotifyApi.setAccessToken(access_token);
      }, expires_in / 2 * 1000);
    })
    .catch(error => {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`);
    });
});

router.get('/deezer/login', (req, res) => {
  res.redirect(`https://connect.deezer.com/oauth/auth.php?app_id=${dzAppId}&redirect_uri=${dzRedirectUri}&perms=basic_access,email,manage_library`);
});

router.get('/deezer/callback', async (req, res) => {
  const { code } = req.query;
  const url = `https://connect.deezer.com/oauth/access_token.php`;
  try {
    const resp = await axios({
      method: 'get',
      url,
      params: {
        app_id: dzAppId,
        secret: dzSecretKey,
        code,
        output: 'json',
      }
    });
    return res.json(resp.data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;