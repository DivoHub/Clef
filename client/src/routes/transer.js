import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : 'https://clefproject.herokuapp.com'

export default function Transfer({ tokens }) {
  const [spotifyPls, setSpotifyPls] = useState([]);
  const [deezerPls, setDeezerPls] = useState([]);

  const [transferFrom, setTransferFrom] = useState('spotify');

  const [selectedSP, setSelectedSP] = useState('');
  const [selectedDP, setSelectedDP] = useState('');

  const [loading, setLoading] = useState(false);

  const handleDirection = e => {
    setTransferFrom(e.target.value);
  }

  const getDeezerPlaylists = async () => {
    const url = `${baseUrl}/api/deezer/playlists`;
    const request = {
      method: 'get',
      url,
      params: {
        deezerToken: tokens.deezerToken,
      }
    }
    const { data } = await axios(request);
    setDeezerPls(data.data);
  }

  const getSpotifyPlaylists = async () => {
    const url = `${baseUrl}/api/spotify/playlists`;
    const request = {
      method: 'get',
      url,
    }
    const { data } = await axios(request);
    setSpotifyPls(data.items);
  }

  const transferSongs = async () => {
    setLoading(true);
    let url = `${baseUrl}/api/${transferFrom}/transfer`;
    url += transferFrom === 'spotify' ? `/${selectedSP}/${selectedDP}` : `/${selectedDP}/${selectedSP}`
    const request = {
      method: 'get',
      url,
      params: {
        deezerToken: tokens.deezerToken,
      },
    }

    try {
      await axios(request);
    } catch (err) {
      window.alert('something went wrong. Try another combination!!');
      setSelectedSP('');
      setSelectedDP('');
    }
    setLoading(false);
  }

  useEffect(() => {
    if (tokens.deezerToken) {
      getSpotifyPlaylists();
      getDeezerPlaylists();
    }
  }, [tokens.deezerToken])

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Transfer songs</h2>
      <div>
        Direction:
        <br />
        <input
          type='radio'
          value='spotify'
          checked={transferFrom === 'spotify'}
          onChange={handleDirection}
        /> Spotify to Deezer
        <br />
        <input
          type='radio'
          value='deezer'
          checked={transferFrom === 'deezer'}
          onChange={handleDirection}
        /> Deezer to Spotify
        </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <div style={{
            width: '50%',
            border: '2px solid',
            padding: '1rem'
        }}>
          <h4>Spotify Playlists</h4>
          {spotifyPls?.map(sp => (
            <div
              key={sp.id}
              style={{
                cursor: 'pointer',
                color: selectedSP === sp.id ? '#97B844' : 'black'
              }}
              onClick={() => setSelectedSP(sp.id)}
              >
                {sp.name}
            </div>
          ))}
        </div>
        <div style={{
            width: '50%',
            border: '2px solid',
            padding: '1rem'
        }}>
          <h4>Deezer Playlists</h4>
            {deezerPls?.map(dp => (
              <div
                key={dp.id}
                style={{
                  cursor: 'pointer',
                  color: selectedDP === dp.id ? '#97B844' : 'black'
                }}
                onClick={() => setSelectedDP(dp.id)}
                >
                  {dp.title}
              </div>
            ))}
        </div>
      </div>
      <div>
        <button
          onClick={transferSongs}
          disabled={transferFrom === '' || selectedDP === '' || selectedSP === ''}
        >
          {loading ? 'Transfering...' : 'Transfer'}
        </button>
      </div>
    </main>
  );
}