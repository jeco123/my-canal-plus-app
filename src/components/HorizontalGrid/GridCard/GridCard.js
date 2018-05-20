import React from 'react';
import './GridCard.css';

export const GridCard = (props) => {
    return (
        <li className="list-item-card">
            <div className="list-item-card-image">
                <img src={props.thumbnail} alt={props.title} />
            </div>
        </li>
    )
}