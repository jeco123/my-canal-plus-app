import React, { Component } from 'react';
import './AppContent.css';
import SubNavigation from './SubNavigation/SubNavigation';
import ListItemCard from './ListItemCard/ListItemCard';
import axios from 'axios';

const MOVIE_DB_API = 'https://api.themoviedb.org/3';
const IMAGE_DB_API = 'https://image.tmdb.org/t/p/w300';
axios.defaults.baseURL = MOVIE_DB_API;

class AppContent extends Component {
  constructor() {
    super();
    this.state = {
      listItems: []
    };
  }
  componentDidMount() {
    axios.get('/discover/movie', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      params: {
        api_key: '92b418e837b833be308bbfb1fb2aca1e'
      }
    })
      .then(response => {
        this.setState({
          listItems: response.data.results.reduce((acc, item) => {
            acc.push({  id: item.id, 
                        title: item.name, 
                        thumbnail: `${IMAGE_DB_API}${item.poster_path}` 
                      });
            return acc;
          }, [])
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="main-content">
        <SubNavigation />
        <ul>
          {
            this.state.listItems.map(item =>
              <ListItemCard key={item.id} item={item} />
            )}
        </ul>
      </div>
    );
  }
}

export default AppContent;
