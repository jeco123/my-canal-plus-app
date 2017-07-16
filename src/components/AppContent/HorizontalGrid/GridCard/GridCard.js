import React, { Component } from 'react';
import './GridCard.css';

class GridCard extends Component {
    render() {
        return (
            <li className="list-item-card">
                <div className="list-item-card-image">
                    <img src={this.props.thumbnail} alt={this.props.title}/>
                </div>
                <div className="list-item-card-info">
                    <h4>{this.props.title}</h4>
                </div>
            </li>
        );
    }
}

export default GridCard;
