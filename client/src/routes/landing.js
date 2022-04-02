import bg from '../images/bg.jpg';
import { Link } from "react-router-dom";

export default function Landing() {
  return (
        <div>
            <header>
                <div className="header">
                    <div className="title">Clef</div>
                    <p className="desc">Playlists Should Be Portable!</p>
                </div>
            </header>
            <div className="welcome">
                <img src="images/clef.png" alt="Clef"/>
                <h2> Welcome to Clef </h2>
                <p> Click Start to Begin!</p>
                <Link to="/login">Start</Link>
                {/* <button> Start </button> */}
            </div>
            <footer className="footer">
                <img src="images/Deezer_Logo.png" alt="Clef"/>
                <img src="images/Spotify_Logo.png" alt="Clef"/>
            </footer>
        </div>
    )
}