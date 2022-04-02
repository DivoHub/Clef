import React from 'react';
import {useState, useEffect} from 'react';
import SourceChooser from './SourceChooser.js';
import TargetChooser from './TargetChooser.js';
import ServiceChooser from './ServiceChooser.js';
import PlaylistsAndOptions from './PlaylistsAndOptions.js';
import SpotifyLogin from './SpotifyLogin'

const code = new URLSearchParams(window.location.search).get('code');

console.log(code);

const Application = props=>{

    const [playlistsS, setPlaylistsS] = useState([
        "playlistS1",
        "playlistS2",
        "playlistS3",
        "playlistS4"
    ]);

    const [playlistsT, setPlaylistsT] = useState([
        "playlistT1",
        "playlistT2",
        "playlistT3",
        "playlistT4"
    ])

    const [source, setSource] = useState(()=>{
        const savedSource = localStorage.getItem("source");
        const initialSource = JSON.parse(savedSource);
        return initialSource || "";
    });
    const [target, setTarget] = useState(()=>{
        const savedTarget = localStorage.getItem("target");
        const initialTarget = JSON.parse(savedTarget);
        return initialTarget || "";
    });

    useEffect(()=>{
        localStorage.setItem("source", JSON.stringify(source))
    }, [source]);

    useEffect(()=>{
        localStorage.setItem("target", JSON.stringify(target))
    }, [target]);
    
    const handleSourceService = (event, source)=>{
        setSource(source);
    }

    const handleTargetService = (event, target)=>{
        setTarget(target);
    }

    let content;

    if (source == "") {
        content = <SourceChooser handleSourceService={handleSourceService}/>;
    } else if (target == "") {
        content = <TargetChooser handleTargetService={handleTargetService} source={source} target={target}/>;
    } else if (source == target) {
        content = <TargetChooser handleTargetService={handleTargetService} source={source} target={target}/>;
    } else {
        content = <PlaylistsAndOptions playlistsS={playlistsS} playlistsT={playlistsT} source={source} target={target}/>
    }
    
    return <>
        {content}
    </>
};

export default Application;