import React, { Component } from 'react';
import './ListItemCard.css';

class ListItemCard extends Component {
    render() {
        return (
            <li className="list-item-card">
                <div className="list-item-card-image">
                    <img src={this.props.item.thumbnail} alt={this.props.item.title}/>
                </div>
            </li>
        );
    }
}

export default ListItemCard;
