import React, { Component } from 'react';
import './SubNavigation.css';

class SubNavigation extends Component {
  render() {
    return (
        <section className="sub-nav-container">
            <div className="sub-nav-title">
                <span>Discover films and series</span>
            </div>
            <ul className="sub-nav">
                <li>
                    <a href="#"><span>All</span></a>
                </li>
                <li>
                    <a href="#"><span>Series</span></a>
                </li>
                <li>
                    <a href="#"><span>Movies</span></a>
                </li>
            </ul>
        </section>
    );
  }
}

export default SubNavigation;
