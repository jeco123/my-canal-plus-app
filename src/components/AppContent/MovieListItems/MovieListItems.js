import React, { Component } from 'react';
import './MovieListItems.css';
import HorizontalGrid from '../HorizontalGrid/HorizontalGrid';

class MovieListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HorizontalGrid title={this.props.title}
                      subTitle={this.props.subTitle} 
                      items={this.props.items}/>
    );
  }
}

export default MovieListItems;
