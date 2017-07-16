import React from 'react';
import './SubNavigation.css';

export const SubNavigation = (props) => {
    return (
        <section className="sub-nav-container">
            <div className="sub-nav-title">
                <span>{props.title}</span>
            </div>
            <ul className="sub-nav">
            {
                props.navItems.map(item => {
                    return <li><a href="#"><span>{item.name}</span></a></li>;
                })
            }
            </ul>
        </section>
    )
}