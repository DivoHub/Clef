import React from 'react';


const TargetChooser = props=>{
    return <>
        <fieldset className="targetService">
        <form className="sourceForm">
            <p>Please choose the source music service: </p>
            <div className="login-info">
                <div className="logos">
                    <ul>
                        <li><img src="images/Spotify_Logo.png" alt="Spotify"/><input type="radio" name="source" value="spotify" /></li>
                        <li><img src="images/Deezer_Logo.png" alt="Deezer"/><input type="radio" name="source" value="deezer" /></li>
                    </ul>
                </div>
                <div className="loginfo">
                    <div className="loginfomation">
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username"/><br/><br/>
                        <label htmlFor="PIN">PIN: </label>
                        <input type="text" id="pin" name="pin"/>
                    </div>
                </div>
                <div className="button">
                    <button onClick={event=>props.handlePlaylistsFromTarget(event)}>Login</button>
                </div>
            </div>
        </form>
        </fieldset>
    </>
};

export default TargetChooser;