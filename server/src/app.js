const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const spotifyWebApi = require('spotify-web-api-node')

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'b26491d4a12f481f9c8cd979e7151646',
        clientSecret: '0877bb4b043b472f8ff367700b27a08b',
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(err => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001)

app.get('/api/ping', (_, res) => {

    res.send({ ping: 'pong' });
  });


module.exports=app;