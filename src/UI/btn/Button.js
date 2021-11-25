import React from 'react';
import './Button.css';

import { Link } from "react-router-dom";

const Button = (props)=>{
    return(
        <Link to={props.link} 
                className="total-btn"
                style={props.style}>
                     {props.title}
        </Link>
    )
}

export default Button;