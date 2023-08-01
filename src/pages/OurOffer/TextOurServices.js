import React from 'react';
import './TextOurServices.css'

function TextOurServices (props) {
   
    return (
        <div className={props.className}>
           {props.children}
        </div>
    );
};


export default TextOurServices;