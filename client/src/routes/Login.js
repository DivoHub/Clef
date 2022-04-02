import useAuthTokens from "../hooks/useAuthTokens";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_URL  || 'http://localhost:5000';

export default function Login() {
  const { spotifyToken, deezerToken } = useAuthTokens();
  const navigate = useNavigate();

  const handleClick = () => {
    if (spotifyToken && deezerToken) {
      navigate('/app');
    }
  }

  const isBtnDisabled = !spotifyToken || !deezerToken;

  return (
    <div>
      <h2>Login with both spotify and Deezer</h2>
      <a href={`${baseUrl}/spotify/login`}>Login with spotify</a>
      <br />
      <a href={`${baseUrl}/deezer/login`}>Login with Deezer</a>
      <br />
      <button onClick={handleClick} disabled={isBtnDisabled}>{isBtnDisabled ? 'Login with both spotify and deezer to continue' : 'Lets go'}</button>
    </div>
  );
}