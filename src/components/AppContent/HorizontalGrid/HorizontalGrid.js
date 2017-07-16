import React, { Component } from 'react';
import './HorizontalGrid.css';
import HorizontalControl from './HorizontalControl/HorizontalControl';
import GridCard from './GridCard/GridCard';

class HorizontalGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translationValue: 0,
            lastControlDisabled: true,
            nextControlDisabled: false
        };
    }

    onLast = () => {
        this.setState((prev, props) => {
            let computedValue = (prev.translationValue < 0) ? prev.translationValue + 5 * (185 + 24) : 0;
            return {
                translationValue: computedValue,
                lastControlDisabled: (computedValue == 0),
                nextControlDisabled: false
            }
        });
    }
    onNext = () => {
        this.setState((prev, props) => {
            let computedValue = prev.translationValue - 5 * (185 + 24);
            let nextControlDisabled = -(Math.floor(props.items.length / 5) - 1) * 5 * (185 + 24) == computedValue;
            return {
                lastControlDisabled: false,
                nextControlDisabled: nextControlDisabled,
                translationValue: computedValue
            }
        })
    }
    render() {
        return (
            <div className="horizontal-grid-container">
                <div className="container">
                    <div className="headings">
                        <h2 className="heading-2">{this.props.title}</h2>
                        <h3 className="heading-2-sub">{this.props.subTitle}</h3>
                        <div className="horizontal-controls">
                            <HorizontalControl name="Last" disabled={this.state.lastControlDisabled} onClick={this.onLast} />
                            <HorizontalControl name="Next" disabled={this.state.nextControlDisabled} onClick={this.onNext} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ul className="list-items-grid" style={{ transform: `translateX(${this.state.translationValue}px)` }}>
                        {
                            this.props.items.map(item =>
                                <GridCard key={item.id} {...item} />
                            )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default HorizontalGrid;
