const express = require('express');
require('express-async-errors');
const { errorHandler } = require('./utils/utils');
const authRouter = require('./routes/auth');
const deezerRouter = require('./routes/deezer');
const spotifyRouter = require('./routes/spotify');

const app = express();

app.get('/api/ping', (req, res) => {
  return res.json({ ping: 'pong' });
})

app.use(authRouter);
app.use('/api/deezer', deezerRouter);
app.use('/api/spotify', spotifyRouter);

app.use(errorHandler)

const port = process.env.PORT || 5000

module.exports = app;