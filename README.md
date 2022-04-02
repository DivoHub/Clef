# API Endpoints

- `POST /api/transer/from-spotify-to-deezer`

  ```
  spotifyPlaylistId: ID of spotify playlist to clone from
  deezerPlaylistId: ID of deezer playlist to add to
  ```

  - Fetch songs from playlist in spotify (/)
  - Extract list of track names
  - Query Deezer for these names
  - get song ids for deezer
  - Add songs to the deezer playlist

- `POST /api/transer/from-deezer-to-spotify`

  ```
  deezerPlaylistId: ID of deezer playlist to clone from
  spotifyPlaylistId: ID of spotify playlist to add to
  ```

  - Fetch songs from playlist in deezer
  - Extract list of track names
  - Query spotify for these songs
  - Extract song ids from queries
  - Add songs to the spotify playlist
