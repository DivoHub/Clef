import React from 'react';
import {useState} from 'react';
import ServiceChooser from './ServiceChooser.js';
import PlaylistsAndOptions from './PlaylistsAndOptions.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpotifyLogin from './SpotifyLogin'

const App = props=>{
    
    const [playlists, setPlaylists] = useState([]);
    
    const handlerPlaylists = (event)=>{
        event.preventDefault();
        setPlaylists(["playlist1", "playlist2", "playlist3", "playlist4"]);
    }
    
    return <>

    <header>
        <div className="title">Clef</div>
        <p className="desc">Easy way to transfer your playlists between different music services</p>
    </header>
        <SpotifyLogin />
        <ServiceChooser handlerPlaylists={handlerPlaylists}/>
        <PlaylistsAndOptions playlists={playlists}/>
    </>
};

export default App;