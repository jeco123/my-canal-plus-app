import React, { Component } from 'react';
import './SubNavigation.css';

class SubNavigation extends Component {
  render() {
    return (
        <div className="sub-nav-container">
            <div className="sub-nav-title">
                <span>Discover films and series</span>
            </div>
            <ul className="sub-nav">
                <li>
                    <span>All</span>
                </li>
                <li>
                    <span>Series</span>
                </li>
                <li>
                    <span>Movies</span>
                </li>
            </ul>
        </div>
    );
  }
}

export default SubNavigation;
