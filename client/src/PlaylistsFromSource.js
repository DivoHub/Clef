import React from 'react';
import {useEffect, useState} from 'react';

const PlaylistsFromSource = props=>{
    
    return <>
        <fieldset className="playlists-source">
            <form>
                <label htmlFor="playlistsFromSource">Playlist(s) from source service: </label>
                <ul>
                    {props.playlists.map(playlist=><li><label>{playlist}<input type="checkbox" value={playlist}/></label></li>)}
                </ul>
            </form>
        </fieldset>
    </>
};

export default PlaylistsFromSource;