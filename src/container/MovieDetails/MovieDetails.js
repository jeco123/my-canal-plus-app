import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBackground } from '../../actions/header';
import { fetchMovieInfo } from '../../actions/moviedb';
import VoteRating from '../../components/VoteRating';
import config from '../../config/movieDB';
import './MovieDetails.css';

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
        const posterUrl = movie.poster_path ? `${config.imgApi}original${movie.poster_path}` : null;
        this.props.setHeaderBackground(posterUrl);
      }
    }
  }

  render() {
    const movie = this.props.movies[this.props.params.id];
    const posterUrl = movie && movie.poster_path ? `${config.imgApi}original${movie.poster_path}` : null;
    const overview = movie && movie.overview ? movie.overview : 'Pas de commentaire disponible.';
    return (
      <div>
        {
          movie &&
          <div className='MovieDetails'>
            <h1>{movie.title}</h1>
            <div className='movieHeader'>
              <div className='moviePicture'>
                <img width='150px' src={posterUrl} />
              </div>
              <div className='movieRating'>
                <VoteRating
                  rate={movie.vote_average * 5 / 10}
                  nbVotes={movie.vote_count} />
              </div>
            </div>
            <p>{overview}</p>
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