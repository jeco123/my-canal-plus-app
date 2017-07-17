import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import {SubNavigation} from './SubNavigation/SubNavigation';
import logo from './assets/logo_cplus.svg';
import banner from './assets/fond-description2.jpg';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        let navItems = [
            {name: "All"},
            {name: "Movies"},
            {name: "Series"}
        ]
        return (
            <header className="header background">
                <NavigationBar logo={logo}/>
            </header>
        );
    }
}

export default AppHeader;
