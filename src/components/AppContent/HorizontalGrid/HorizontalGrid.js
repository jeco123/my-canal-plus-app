import React, { Component } from 'react';
import './HorizontalGrid.css';
import { HorizontalControl } from './HorizontalControl/HorizontalControl';
import { GridCard } from './GridCard/GridCard';

class HorizontalGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translationValue: 0,
            nbImages: this.getNbImages(),
            lastControlDisabled: true,
            nextControlDisabled: false
        };
    }

    getNbImages() {
        let nbImages = 2;
        if (window.matchMedia("(min-width:1280px)").matches) {
            nbImages = 6;
        } else if (window.matchMedia("(min-width:1060px)").matches) {
            nbImages = 5;
        } else if (window.matchMedia("(min-width:840px)").matches) {
            nbImages = 4;
        } else if (window.matchMedia("(min-width:660px)").matches) {
            nbImages = 3;
        }
        return nbImages;
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
            computedValue = computedValue > 0 ? 0 : computedValue;
            return {
                translationValue: computedValue,
                lastControlDisabled: (computedValue === 0),
                nextControlDisabled: false
            }
        });
    }
    onNext = () => {
        this.setState((prev, props) => {
            let computedValue = prev.translationValue - prev.nbImages * (185 + 24);
            let optimizedComputation = -(props.items.length-prev.nbImages) * (185 + 24);
            computedValue = computedValue < optimizedComputation ? optimizedComputation : computedValue;
            let nextControlDisabled =  optimizedComputation === computedValue;
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
