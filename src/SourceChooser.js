import React from 'react';


const SourceChooser = props=>{
    return <>
        <fieldset className="sourceService">
            <form>
                <label htmlFor="source">Please choose the source music service: </label>
                <br/>
                <select name="source" id="source">
                    <option value="Apple">Apple Music</option>
                    <option value="Spotify">Spotify</option>
                </select>
                <button>Submit</button>
            </form>
        </fieldset>
    </>
};

export default SourceChooser;