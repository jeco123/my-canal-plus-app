import React, { Component } from 'react';
import './MovieListItems.css';
import ListItemCard from './ListItemCard/ListItemCard';
import moviedb from 'moviedb';

const IMAGE_DB_API = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const API_KEY = '92b418e837b833be308bbfb1fb2aca1e';
const MOVIE_DB_API_V_3 = moviedb(API_KEY);

class MovieListItems extends Component {
  constructor() {
    super();
    this.state = {
      listItems: []
    };
  }
  componentDidMount() {
    MOVIE_DB_API_V_3.discoverMovie((err, data) => {
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
  render() {
    return (
      <div className="movie-list-container">
        <div className="container">
          <div className="headings">
          <h2 className="heading-2">Movies</h2>
        </div>
        </div>
        <div className="container">
          <ul className="list-items-grid">
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
