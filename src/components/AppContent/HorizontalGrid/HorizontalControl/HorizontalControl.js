import React, { Component } from 'react';
import './HorizontalControl.css';

class HorizontalControl extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <button type="button"
                disabled={this.props.disabled}
                className={this.props.disabled ? "horizontal-control disabled" : "horizontal-control"}
                onClick={this.props.onClick}>
                {this.props.name}
            </button>
        );
    }
}

export default HorizontalControl;