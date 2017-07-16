import React, { Component } from 'react';
import './HorizontalGridDetailsContent.css'

class HorizontalGridDetailsContent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={'horizontal-grid-details' + (this.props.opened ? ' open' : '')}>
                {(
                    this.props.opened ?
                        <div className='horizontal-grid-details-content'>
                            This is my content
                        </div>
                        : ''
                )}
            </div>
        );
    }
}

export default HorizontalGridDetailsContent;
