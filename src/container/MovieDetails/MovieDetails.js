import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBackground } from '../../actions/header';
import { fetchMovieInfo } from '../../actions/moviedb';
import config from '../../config/movieDB';

class MovieDetails extends Component {
  componentDidMount() {
    const movie = this.props.movies[this.props.params.id];
    if (movie) {
      this.props.setHeaderBackground(`${config.imgApi}original${movie.poster_path}`)
    } else {
      this.props.getMovieDetails(this.props.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movies[this.props.params.id] !== this.props.movies[this.props.params.id]) {
      const movie = nextProps.movies[this.props.params.id];
      if (movie) {
        this.props.setHeaderBackground(`${config.imgApi}original${movie.poster_path}`)
      }
    }
  }

  render() {
    const movie = this.props.movies[this.props.params.id];
    return (
      <div>
        {
          movie && 
          <div>
            <h1>{movie.title}</h1>
            <h2>SYNOPSIS ET DÉTAILS</h2>
            <p>{movie.overview}</p>
          </div>
        }
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  movies: state.moviedb.moviesPool,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieDetails: id => dispatch(fetchMovieInfo(id)),
  setHeaderBackground: img => dispatch(updateBackground(img)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);