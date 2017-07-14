import React, { Component } from 'react';
import './ListItemCard.css';

class ListItemCard extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div className="list-item-card">
                <div className="list-item-card-image">
                    <img src={this.props.item.thumbnail}/>
                </div>
            </div>
        );
    }
}

export default ListItemCard;
