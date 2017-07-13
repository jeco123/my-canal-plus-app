import React, { Component } from 'react';
import './ListItemCard.css';

class ListItemCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="list-item-card">
                <div className="list-item-card-image">
                    <img src="http://via.placeholder.com/350x150"/>
                </div>
                <div className="list-item-card-info">
                    <p className="title">My card</p>
                    <p className="summary">lorem ipsum blabla</p>
                </div>
            </div>
        );
    }
}

export default ListItemCard;
