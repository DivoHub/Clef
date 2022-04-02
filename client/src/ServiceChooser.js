import React from 'react';
import SourceChooser from './SourceChooser.js';
import TargetChooser from './TargetChooser.js';

const ServiceChooser = props=>{
    
    return <>
        <div className="service-choose">
            <SourceChooser handlePlaylistsFromSource={props.handlePlaylistsFromSource}/>
            <TargetChooser handlePlaylistsFromTarget={props.handlePlaylistsFromTarget}/>
        </div>
    </>
    
};

export default ServiceChooser;