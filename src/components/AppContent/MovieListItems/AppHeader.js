import React, { Component } from 'react';
import logo from './assets/logo_cplus.svg';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="header">
                <div className="navigation-bar">
                    <div className="navigation-bar-logo">
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                </div>
            </header>
        );
    }
}

export default AppHeader;
