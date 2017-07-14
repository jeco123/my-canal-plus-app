import React, { Component } from 'react';
import './MovieListItems.css';
import ListItemCard from './ListItemCard/ListItemCard';
import moviedb from  'moviedb';

const IMAGE_DB_API = 'https://image.tmdb.org/t/p/w300_and_h300_bestv2';
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
      this.setState({
          listItems: data.results.reduce((acc, item) => {
            acc.push({  id: item.id, 
                        title: item.name, 
                        thumbnail: `${IMAGE_DB_API}${item.poster_path}` 
                      });
            return acc;
          }, [])
        });
    });
  }
  render() {
    return (
        <section>
        <ul className="list-items-container">
          {
            this.state.listItems.map(item =>
              <ListItemCard key={item.id} item={item}/>
            )}
        </ul>
      </section>
    );
  }
}

export default MovieListItems;
