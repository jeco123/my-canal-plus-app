import React, { Component } from 'react';
import './ListItemCard.css';

class ListItemCard extends Component {
    render() {
        return (
            <li className="list-item-card">
                <div className="list-item-card-image">
                    <img src={this.props.item.thumbnail} alt={this.props.item.title}/>
                </div>
                <div className="list-item-card-info">
                    <h4>{this.props.item.title}</h4>
                </div>
            </li>
        );
    }
}

export default ListItemCard;
