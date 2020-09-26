import React from 'react';
import './button.sass';

export default function Button(props) {
    return(
        <div>
            <button className="button">{props.buttonName}</button>
        </div>
    )
}