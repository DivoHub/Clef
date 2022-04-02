import React from 'react';
import PlaylistsFromSource from './PlaylistsFromSource.js';
import Options from './Options.js';
import PlaylistsFromTarget from './PlaylistsFromTarget.js';

const PlaylistsAndOptions = props=>{
    
    return <>
        <div className="PAO">
            <PlaylistsFromSource playlists={props.playlistsS} source={props.source}/>
            <Options />
            <PlaylistsFromTarget playlists={props.playlistsT} target={props.target}/>
        </div>
    </>
};

export default PlaylistsAndOptions;