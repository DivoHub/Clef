const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');


const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName)

  console.log("---------------+++++++++++++++++++++++++")
  let playlists = []

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id)
    
    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);

    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    //fs.writeFileSync(playlist.name+'.json', data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  // console.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track);
    console.log(track.name + " : " + track.artists[0].name)
  }
  
  console.log("---------------+++++++++++++++++++++++++")
  return tracks;
}

getMyData();

const { sanitizeName } = require('./utils/utils');
const DeezerApi =  require("deezer-public-api")
const SpotifyApi = require("spotify-web-api-node")
const deezer = new DeezerApi()
const spotify = new SpotifyApi()

//Returns Array of Playlist IDs (array) given a User ID (int)
async function getUserPlaylists(userId){
    const playlists = await deezer.user.playlists(userId);
    const playlistArray = playlists.data.map(p => p.id)
    // console.log("List of playlist IDs from given UserID");
    // console.log(playlistArray);
    return playlistArray;
}


//Returns String of playlist Name (str) given a PlaylistID (int)
function getPlaylistNames(playlistId){
    deezer.user.playlist(playlistId).then(function(result){

        return result
    })
}


//Returns Array of Track IDs (array) given 1 Playlist ID (int)
function getPlaylistTrackIds(playlistId){
    deezer.playlist.tracks(playlistId).then(function(result){
        let array = result.data.map(out => out.id)
        console.log("List of songs in playlist given: " + array)
    })
}

//Returns 1 string (str) for what will be used to Query Spotify Search given 1 TrackID (int)
function getSearchQueryName(TrackId){
    deezer.track(TrackId).then(function(result){
        let name = result.title_short + " " + result.artist.name
        console.log(sanitizeName(name))
        return name
    })
}


//SIDD HELP
function searchSpotify(searchQueryStr){
    spotify.searchTracks(searchQueryStr)
        .then(function(data) {
            console.log('Search by ', data.body);
        }, function(err) {
            console.error(err);
  });

}
