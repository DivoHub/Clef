import React from 'react';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const SPO_AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b26491d4a12f481f9c8cd979e7151646&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-library-modify%20user-library-read%20playlist-modify-private%20playlist-read-collaborative%20user-read-email%20playlist-read-private%20playlist-modify-public"

const DEE_AUTH_URL = "https://connect.deezer.com/oauth/auth.php?app_id=534762&redirect_uri=http://localhost:3000&perms=basic_access,email,manage_library"

const SourceChooser = props=>{

    return <>
        <fieldset className="sourceService">
        <form className="sourceForm">
            <p>Please choose the source music service: </p>
            <div className="login-info">
                <a href={SPO_AUTH_URL} onClick={event=>props.handleSourceService(event, "spotify")}>
                    <img src="images/Spotify_Logo.png" alt="Spotify"/>
                </a>
                <a href={DEE_AUTH_URL} onClick={event=>props.handleSourceService(event, "deezer")}>
                    <img src="images/Deezer_Logo.png" alt="Deezer"/>
                </a>

            </div>
        </form>
        </fieldset>
    </>
};

export default SourceChooser;