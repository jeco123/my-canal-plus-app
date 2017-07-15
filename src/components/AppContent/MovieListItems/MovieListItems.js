import React, { Component } from 'react';
import './MovieListItems.css';
import ListItemCard from './ListItemCard/ListItemCard';
import moviedb from 'moviedb';

const IMAGE_DB_API = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const API_KEY = '92b418e837b833be308bbfb1fb2aca1e';
const MOVIE_DB_API_V_3 = moviedb(API_KEY);

class MovieListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      translationValue: 0,
      nextButtonDisabled: false,
      previousButtonDisabled: true
    };
  }
  componentDidMount() {
    MOVIE_DB_API_V_3.discoverMovie({sort_by: 'popularity.desc'
      },(err, data) => {
      console.log(data)
      this.setState({
        listItems: data.results.reduce((acc, item) => {
          acc.push({
            id: item.id,
            title: item.title,
            thumbnail: `${IMAGE_DB_API}${item.poster_path}`
          });
          return acc;
        }, [])
      });
    });
  }
  onLast = () => {
    this.setState((prev, props) => {
      let computedValue = (prev.translationValue < 0) ? prev.translationValue + 5 * (185 + 24) : 0;
      return {
        translationValue: computedValue,
        previousButtonDisabled: (computedValue == 0),
        nextButtonDisabled: false
      }
    })
  }
  onNext = () => {
    this.setState((prev, props) => {
      let computedValue = prev.translationValue - 5 * (185 + 24);
      let nextButtonDisabled = -(Math.floor(prev.listItems.length / 5) - 1) * 5 * (185 + 24) == computedValue;
      return {
        previousButtonDisabled: false,
        nextButtonDisabled: nextButtonDisabled,
        translationValue: computedValue
      }
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="movie-list-container">
        <div className="container">
          <div className="headings">
            <h2 className="heading-2">SELECTION OF POPULAR MOVIES</h2>
            <h3 className="heading-2-sub">Sélectionnées pour vous par nos Deezer Editors</h3>
            <div className="horizontal-controls">
              <button type="button" 
                      disabled={this.state.previousButtonDisabled} 
                      className={this.state.previousButtonDisabled ? "horizontal-control disabled" : "horizontal-control"} 
                      onClick={this.onLast}>Prev
              </button>
              <button type="button" 
                      disabled={this.state.nextButtonDisabled} 
                      className={this.state.nextButtonDisabled ? "horizontal-control disabled" : "horizontal-control"} 
                      onClick={this.onNext}>Next
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="list-items-grid" style={{ transform: `translateX(${this.state.translationValue}px)` }}>
            {
              this.state.listItems.map(item =>
                <ListItemCard key={item.id} item={item} />
              )}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieListItems;
