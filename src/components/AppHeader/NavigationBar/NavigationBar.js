import React, { Component } from 'react';
import hamburger from './assets/hamburger.svg';
import './NavigationBar.css';

class NavigationBar extends Component {
    constructor() {
        super();
        this.state = {
            hide: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (evt) => {
        this.setState({
            hide: (window.pageYOffset > 100) ? true : false
        })
    }

    render() {

        return (
            <div className={this.state.hide ? 'navigation-bar hide' : 'navigation-bar show'}>
                <div className="navigation-bar-logo">
                    <img src={hamburger} className="hamburger" alt="menu" />
                    <img src={this.props.logo} className="logo" alt="logo" />
                </div>
            </div>
        )
    }
}

export default NavigationBar;