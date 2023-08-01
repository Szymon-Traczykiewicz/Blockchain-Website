import React from 'react';

import './Button.css';

const Button = (props) => {
    const classes = 'card1 ' + props.className;

    return (
        <button
            onClick={props.onClick}
            className={classes}
            type={props.type || 'button'}

        >
            <span><a className='aButtonContactUs' href={props.link}>{props.name}</a></span>
        </button>
    );
};

export default Button;