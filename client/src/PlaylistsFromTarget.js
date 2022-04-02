import React from 'react';

const PlaylistsFromTarget = props=>{
    
    return <>
        <fieldset className="playlists-target">
            <form>
                <label htmlFor="playlistsFromTarget">Playlist(s) from target service: </label>
                {props.target == "spotify" ? <img src="images/Spotify_Logo.png" alt="Spotify"/> : <img src="images/Deezer_Logo.png" alt="Deezer"/>}
                <ul>
                    {props.playlists.map(playlist=><li><label>{playlist}<input type="checkbox" value={playlist}/></label></li>)}
                </ul>
            </form>
        </fieldset>
    </>
};

export default PlaylistsFromTarget;