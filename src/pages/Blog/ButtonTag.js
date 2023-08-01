import React from "react";
import './ButtonTag.css';





const ButtonTag = (props) => {

    // const classes = 'buttontag ' + props.className;

    return (
<div onClick={props.onClick} className="buttontag" >
    <span>
        <a className="Textbutton" href={props.link}>{props.children}</a>
    </span>
</div>
    );
};
export default ButtonTag;
