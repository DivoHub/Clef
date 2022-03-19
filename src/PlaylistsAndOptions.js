import React from 'react';
import PlaylistsFromSource from './PlaylistsFromSource.js';
import Options from './Options.js';
import PlaylistsFromTarget from './PlaylistsFromTarget.js';

const PlaylistsAndOptions = props=>{
    
    return <>
        <div className="PAO">
            <PlaylistsFromSource />
            <Options />
            <PlaylistsFromTarget />
        </div>
    </>
};

export default PlaylistsAndOptions;