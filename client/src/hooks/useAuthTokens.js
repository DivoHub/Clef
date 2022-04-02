import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

export default function useAuthTokens() {
    const [spotifyToken, setSpotifyToken] = useState('');
    const [deezerToken, setDeezerToken] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      let token = localStorage.getItem('spotifyToken');
      if (!!token) setSpotifyToken(token);

      token = localStorage.getItem('deezerToken');
      if (!!token) setDeezerToken(token);
    }, []);

    useEffect(() => {
      if (searchParams.get('spotifyToken')) {
        const token = searchParams.get('spotifyToken');
        setSpotifyToken(token);
        localStorage.setItem('spotifyToken', token);
      }
    }, [searchParams.get('spotifyToken')])

    useEffect(() => {
      if (searchParams.get('deezerToken')) {
        const token = searchParams.get('deezerToken');
        localStorage.setItem('deezerToken', token);
        setDeezerToken(token);
      }
    }, [searchParams.get('deezerToken')])

    return { spotifyToken, deezerToken };

}

