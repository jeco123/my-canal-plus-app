import React, { Component } from 'react';
import './AppContent.css';
import SubNavigation from './SubNavigation/SubNavigation';
import ListItemCard from './ListItemCard/ListItemCard';
import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

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
        listItems: response.data.results
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
              <ListItemCard key={item.id}/>
            )}
        </ul>
      </div>
    );
  }
}

export default AppContent;
