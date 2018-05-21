import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenres } from '../../actions/genres';
import HorizontalGrid from '../../components/HorizontalGrid';
import moviedb from 'moviedb';
import './Home.css';

const IMAGE_DB_API = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const API_KEY = '92b418e837b833be308bbfb1fb2aca1e';
const MOVIE_DB_API_V_3 = moviedb(API_KEY);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      kids: [],
      dramas: []
    };
  }

  componentDidMount() {
    this.props.getGenres();
    MOVIE_DB_API_V_3.discoverMovie({
      'sort_by': 'popularity.desc'
    }, (err, data) => {
      this.setState({
        movies: data.results.map(item => {
          return {
            id: item.id,
            title: item.title,
            thumbnail: `${IMAGE_DB_API}${item.poster_path}`
          }
        })
      })
    })
      .discoverMovie({
        'certification_country': 'US',
        'certification.lte': 'G',
        'sort_by': 'popularity.desc'

      }, (err, data) => {
        this.setState({
          kids: data.results.map(item => {
            return {
              id: item.id,
              title: item.title,
              thumbnail: `${IMAGE_DB_API}${item.poster_path}`
            }
          })
        })
      })
      .discoverMovie({
        'with_genres': '18',
        'sort_by': 'vote_average.desc',
        'vote_count.gte': '10'

      }, (err, data) => {
        this.setState({
          dramas: data.results.map(item => {
            return {
              id: item.id,
              title: item.title,
              thumbnail: `${IMAGE_DB_API}${item.poster_path}`
            }
          })
        })
      });
  }

  render() {
    return (
      <div className="Home">
        <div className="horizontal-grid">
          <HorizontalGrid
            title="MOST POPULAR MOVIES"
            subTitle="Selection of the most popular movies"
            items={this.state.movies} />
        </div>
        <div className="horizontal-grid">
          <HorizontalGrid
            title="MOST POPULAR KIDS MOVIES"
            subTitle="Selection of the most popular kids movies"
            items={this.state.kids} />
        </div>
        <div className="horizontal-grid">
          <HorizontalGrid
            title="BEST DRAMAS"
            subTitle="Selection of the best dramas"
            items={this.state.dramas} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getGenres: () => dispatch(fetchGenres())
  }
}

export default connect(null, mapDispatchToProps)(Home);
