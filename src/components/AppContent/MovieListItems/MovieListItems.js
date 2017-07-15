import React, { Component } from 'react';
import './MovieListItems.css';
import HorizontalGrid from '../HorizontalGrid/HorizontalGrid';
import moviedb from 'moviedb';

const IMAGE_DB_API = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const API_KEY = '92b418e837b833be308bbfb1fb2aca1e';
const MOVIE_DB_API_V_3 = moviedb(API_KEY);

class MovieListItems extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    MOVIE_DB_API_V_3.discoverMovie({sort_by: 'popularity.desc'
      },(err, data) => {
      this.setState({
        movies: data.results.reduce((acc, item) => {
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
      <HorizontalGrid title="MOST POPULAR MOVIES" subTitle="Selection of the most popular movies" items={this.state.movies}/>
    );
  }
}

export default MovieListItems;
