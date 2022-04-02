import useAuthTokens from "../hooks/useAuthTokens";
import { useNavigate } from "react-router-dom";

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
      <a href='http://localhost:5000/spotify/login'>Login with spotify</a>
      <br />
      <a href='http://localhost:5000/deezer/login'>Login with Deezer</a>
      <br />
      <button onClick={handleClick} disabled={isBtnDisabled}>{isBtnDisabled ? 'Login with both spotify and deezer to continue' : 'Lets go'}</button>
    </div>
  );
}