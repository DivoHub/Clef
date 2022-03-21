import React from 'react';
import {useState} from 'react';
import ServiceChooser from './ServiceChooser.js';
import PlaylistsAndOptions from './PlaylistsAndOptions.js';

const App = props=>{
    
    const [playlists, setPlaylists] = useState([]);
    
    const handlerPlaylists = (event)=>{
        event.preventDefault();
        setPlaylists(["playlist1", "playlist2", "playlist3", "playlist4"]);
    }
    
    return <>
        <ServiceChooser handlerPlaylists={handlerPlaylists}/>
        <PlaylistsAndOptions playlists={playlists}/>
    </>
};

export default App;