import React from 'react';
import SourceChooser from './SourceChooser.js';
import TargetChooser from './TargetChooser.js';

const ServiceChooser = props=>{
    
    return <>
        <div className="service-choose">
            <SourceChooser handlerPlaylists={props.handlerPlaylists}/>
            <TargetChooser />
        </div>
    </>
    
};

export default ServiceChooser;