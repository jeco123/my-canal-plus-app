import React from 'react';
import { Link } from 'react-router-dom';
import './GridCard.css';
import config from '../../../config/movieDB';

export const GridCard = (props) => {
    return (
        <li className="list-item-card">
            <Link to={props.url}>
                <div className="list-item-card-image">
                    <div style={{
                        backgroundImage: `url(${config.imgApi}/w500${props.poster_path})`,
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                        backgroundSize: '100% 100%',
                    }} />
                </div>
            </Link>
        </li>
    )
}