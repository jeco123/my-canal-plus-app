import React, { Component } from 'react';
import './HorizontalGrid.css';
import { HorizontalControl } from './HorizontalControl/HorizontalControl';
import { GridCard } from './GridCard/GridCard';
import HorizontalGridDetailsContent from './HorizontalGridDetailsContent/HorizontalGridDetailsContent';

class HorizontalGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translationValue: 0,
            nbImages: 5,
            lastControlDisabled: true,
            nextControlDisabled: false
        };
    }

    componentDidMount() {
        window.matchMedia("(min-width:480px)").addListener((evt) => {
            this.setState({
                nbImages: evt.matches ? 2 : 1
            })
        });

        window.matchMedia("(min-width:660px)").addListener((evt) => {
            this.setState({
                nbImages: evt.matches ? 3 : 2
            })
        });
        window.matchMedia("(min-width:840px)").addListener((evt) => {
            this.setState({
                nbImages: evt.matches ? 4 : 3
            })
        });
        window.matchMedia("(min-width:1060px)").addListener((evt) => {
            this.setState({
                nbImages: evt.matches ? 5 : 4
            })
        });
        window.matchMedia("(min-width:1280px)").addListener((evt) => {
            this.setState({
                nbImages: evt.matches ? 6 : 5
            })
        });
    }

    onLast = () => {
        this.setState((prev, props) => {
            let computedValue = (prev.translationValue < 0) ? prev.translationValue + prev.nbImages * (185 + 24) : 0;
            return {
                translationValue: computedValue,
                lastControlDisabled: (computedValue == 0),
                nextControlDisabled: false
            }
        });
    }
    onNext = () => {
        this.setState((prev, props) => {
            let computedValue = prev.translationValue - prev.nbImages * (185 + 24);
            let nextControlDisabled = -(Math.floor(props.items.length / prev.nbImages) - 1) * prev.nbImages * (185 + 24) == computedValue;
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
