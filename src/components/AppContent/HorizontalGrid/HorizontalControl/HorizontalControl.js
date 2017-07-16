import React from 'react';
import './HorizontalControl.css';

export const HorizontalControl = (props) => {
    return (
        <button type="button"
            disabled={props.disabled}
            className={props.disabled ? "horizontal-control disabled" : "horizontal-control"}
            onClick={props.onClick}>
            {props.name}
        </button>
    );
}