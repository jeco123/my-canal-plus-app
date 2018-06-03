import moviedb from 'moviedb';
import movieDB  from '../config/movieDB';
import MovieDateHelper from '../utilities/date';

// action constants
export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_THIS_WEEK_MOVIES_SUCCESS = 'FETCH_THIS_WEEK_MOVIES_SUCCESS';
export const FETCH_MOVIE_INFO_SUCCESS = 'FETCH_MOVIE_INFO_SUCCESS';


const MOVIE_DB_API_V_3 = moviedb(movieDB.apiKey);

export const fetchThisWeekMovies = () => dispatch => {
  dispatch(fetchLoading());
 
  MOVIE_DB_API_V_3.discoverMovie({
    'region': 'FR',
    'language': 'fr',
    'sort_by': 'primary_release_date_desc',
    'status': 'Released',
    'primary_release_date.gte':  MovieDateHelper.getFirstDayOfTheWeek('YYYY-MM-DD'),
    'primary_release_date.lte':  MovieDateHelper.getLastDayOfTheWeek('YYYY-MM-DD'),
  }, (err, data) => {
    dispatch(fetchThisWeekMoviesSuccess(data));
  });
}

export const fetchLoading = () => {
  return {
      type: 'FETCH_LOADING',
  };
}

export const fetchThisWeekMoviesSuccess = payload => {
  return {
    type: 'FETCH_THIS_WEEK_MOVIES_SUCCESS',
    payload,
  }
}

export const fetchMovieInfo = id => dispatch => {
  dispatch(fetchLoading());
  MOVIE_DB_API_V_3.movieInfo({
    id,
    'language': 'fr',
  }, (err, data) => dispatch(fetchMovieInfoSuccess(data)));
};

export const fetchMovieInfoSuccess = payload => ({
  type: FETCH_MOVIE_INFO_SUCCESS,
  payload,
});
