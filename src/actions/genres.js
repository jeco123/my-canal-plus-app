import movieDB from '../config/movieDB';
import moviedb from 'moviedb';

const MOVIE_DB_API_V_3 = moviedb(movieDB.apiKey);

export const FETCH_GENRES = 'FETCH_GENRES';
export const FETCH_GENRES_LOADING = 'FETCH_GENRES_LOADING';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';

export const fetchGenres = () => dispatch => {
  dispatch(fetchGenresLoading());

  MOVIE_DB_API_V_3.genreMovieList({}, (err, data) => {
    dispatch(fetchGenresSuccess(data.genres));
  });
}

export const fetchGenresLoading = () => {
  return {
      type: 'FETCH_GENRES_LOADING',
  };
}

export const fetchGenresSuccess = payload => ({
  type: FETCH_GENRES_SUCCESS,
  payload,
});
