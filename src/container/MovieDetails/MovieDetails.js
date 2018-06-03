import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';
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
            <ReactStars
              count={5}
              value={movie.vote_average * 5 / 10}
              edit={false}
              size={24} />
            <div>Film Comédie, France, 2018, 1h32</div>
            <p>{movie.overview}</p>
            {/* <iframe id="ytplayer" type="text/html" width="425" height="345"
            src="http://www.youtube.com/embed/KxBBcTtk4vE"
            frameborder="0"/> */}
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