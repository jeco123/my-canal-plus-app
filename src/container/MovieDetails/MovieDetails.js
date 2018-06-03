import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = props => {
  const movie = props.movies[props.params.id];
  return (
    <div>
      {
        movie ? <h1>{movie.title}</h1> : <div>Movie not found</div>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.moviedb.moviesPool,
});

export default connect(mapStateToProps)(MovieDetails);