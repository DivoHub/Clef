import React from 'react';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const AUTH_URL = "https//accounts.spotify.com/authorize?client_id=b26491d4a12f481f9c8cd979e7151646&response_type=code&direct_uri=http://localhost:3000&scope=streaming%20user-library-modify%20user-library-read%20playlist-modify-private%20playlist-read-collaborative%20user-read-email%20playlist-read-private%20playlist-modify-public"

export default function SpotifyLogin(){
    
    return (
        <Container> 
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login with Spotify
            </a></Container> 
        )
}
