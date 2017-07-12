import React, { Component } from 'react';
import './SubNavigation.css';

class SubNavigation extends Component {
  render() {
    return (
        <div className="sub-nav-container">
            <div className="sub-nav-title">
                <h2>Discover films and series</h2>
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
