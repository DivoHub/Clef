import React from 'react';

const Options = props=>{
    
    return <>
        <fieldset className="options">
            <form>
                <p>Option: </p>
                <ul className="allOptions">
                    <li>Convert chosen playlist(s)
                    <input type="radio" name="options" value="Convert-chosen-playlist" /></li>
                    <li>Convert all playlist(s)
                    <input type="radio" name="options" value="Convert-all-playlist" /></li>
                </ul>
                <br/>
                <div className="start">
                    <button>Start Convert</button>
                </div>
            </form>
        </fieldset>
    </>
    
};

export default Options;