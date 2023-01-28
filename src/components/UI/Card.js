import React from 'react';
import './Card.css';

function Card(props) {
    const classes= 'card '+props.className;  //this is done for css linking
    return <div className={classes}>{props.children}</div>;
}

export default Card;