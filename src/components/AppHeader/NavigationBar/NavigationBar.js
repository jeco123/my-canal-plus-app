import React from 'react';
import './NavigationBar.css';

export const NavigationBar = (props) => {
    return (
        <div className="navigation-bar">
            <div className="navigation-bar-logo">
                <img src={props.logo} className="logo" alt="logo" />
            </div>
        </div>
    )
}