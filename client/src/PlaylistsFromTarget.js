import React from 'react';

const PlaylistsFromTarget = props=>{
    
    return <>
        <fieldset className="playlists-target">
            <form>
                <label htmlFor="playlistsFromTarget">Playlist(s) from target service: </label>
                <ul>
                    {props.playlists.map(playlist=><li><label>{playlist}<input type="checkbox" value={playlist}/></label></li>)}
                </ul>
            </form>
        </fieldset>
    </>
};

export default PlaylistsFromTarget;