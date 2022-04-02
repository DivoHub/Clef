const express = require('express');
const cors = require('cors');
const path = require('path');
require('express-async-errors');
const { errorHandler } = require('./utils/utils');
const authRouter = require('./routes/auth');
const deezerRouter = require('./routes/deezer');
const spotifyRouter = require('./routes/spotify');

const app = express();
app.use(cors());

app.get('/api/ping', (req, res) => {
  return res.json({ ping: 'pong' });
})

app.use(authRouter);
app.use('/api/deezer', deezerRouter);
app.use('/api/spotify', spotifyRouter);

app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
  });
}


const port = process.env.PORT || 5000

module.exports = app;