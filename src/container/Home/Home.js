import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThisWeekMovies } from '../../actions/moviedb';
import HorizontalGrid from '../../components/HorizontalGrid';
// import moviedb from 'moviedb';
import './Home.css';

// const IMAGE_DB_API = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
// const API_KEY = '92b418e837b833be308bbfb1fb2aca1e';
// const MOVIE_DB_API_V_3 = moviedb(API_KEY);

class Home extends Component {

  componentDidMount() {
    this.props.getThisWeekMovies();
  }

  render() {
    return (
      <div className="Home">
        {<div className="horizontal-grid">
          <HorizontalGrid
            title="SORTIES DE LA SEMAINE"
            subTitle="30 mai - 05 juin"
            items={this.props.weekMovies.map(id => this.props.moviesPool[id])} />
        </div>}
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  weekMovies: state.moviedb.weekMovies,
  moviesPool: state.moviedb.moviesPool,
});

const mapDispatchToProps = (dispatch) => ({
  getThisWeekMovies: () => dispatch(fetchThisWeekMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
