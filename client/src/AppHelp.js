import React from 'react';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Application from './Application.js';

const App = props=>{
    let [visibility, setvisibility] = useState(false); 
    const handlevisibility = ()=>{
        if(visibility==false){
            setvisibility(true);
        }else{
            setvisibility(false);
        }
    };
    
    return(<>
        <header>
            <div className="header">
                <div className="title">Clef</div>
                <p className="desc">Easy way to transfer your playlists between different music services</p>
            </div>
        </header>
        <div hidden={visibility} className="welcome">
            <img src="images/clef.png" alt="Clef"/>
            <h2> Welcome to Clef </h2>
            <p> To begin transfering your playlist just click on the the button below...</p>
            <button onClick={()=>handlevisibility()} > Start </button>
        </div>
        <div  hidden={!visibility} id="application"><Application/></div>
        <footer hidden={visibility}>
            <img src="images/Deezer_Logo.png" alt="Clef"/>
            <img src="images/Spotify_Logo.png" alt="Clef"/>
        </footer>
        </>);
}

export default App;