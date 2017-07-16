import React, { Component } from 'react';
import {NavigationBar} from './NavigationBar/NavigationBar';
import {SubNavigation} from './SubNavigation/SubNavigation';
import logo from './assets/logo_cplus.svg';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        let navItems = [
            {name: "All"},
            {name: "Movies"},
            {name: "Series"}
        ]
        return (
            <header className="header">
                <NavigationBar logo={logo}/>
                <SubNavigation title="Discover serie and movies" navItems={navItems}/>
            </header>
        );
    }
}

export default AppHeader;
