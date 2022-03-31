import React from 'react';
import {useState} from 'react';
import ServiceChooser from './ServiceChooser.js';
import PlaylistsAndOptions from './PlaylistsAndOptions.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpotifyLogin from './SpotifyLogin'

const App = props=>{
    
    const [playlistsS, setPlaylistsS] = useState([]);
    const [playlistsT, setPlaylistsT] = useState([]);
    
    const handlePlaylistsFromSource = event=>{
        event.preventDefault();
        setPlaylistsS(["Splaylist1", "Splaylist2", "Splaylist3", "Splaylist4"]);
    }

    const handlePlaylistsFromTarget = event=>{
        event.preventDefault();
        setPlaylistsT(["Tplaylist1", "Tplaylist2", "Tplaylist3", "Tplaylist4"]);
    }
    
    return <>

    <header>
        <div className="header">
            <div className="title">Clef</div>
            <p className="desc">Easy way to transfer your playlists between different music services</p>
        </div>
        
    </header>
        <SpotifyLogin />
        <ServiceChooser handlePlaylistsFromSource={handlePlaylistsFromSource} handlePlaylistsFromTarget={handlePlaylistsFromTarget}/>
        <PlaylistsAndOptions playlistsS={playlistsS} playlistsT={playlistsT}/>
    </>
};

export default App;