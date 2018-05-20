import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import logo from './assets/logo_cplus.svg';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="header background">
                <NavigationBar logo={logo}/>
            </header>
        );
    }
}

export default AppHeader;
