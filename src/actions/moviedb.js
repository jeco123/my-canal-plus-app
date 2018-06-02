import moviedb from 'moviedb';
import movieDB  from '../config/movieDB';
import MovieDateHelper from '../utilities/date';

// action constants
export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_THIS_WEEK_MOVIES_SUCCESS = 'FETCH_THIS_WEEK_MOVIES_SUCCESS';


const MOVIE_DB_API_V_3 = moviedb(movieDB.apiKey);

export const fetchThisWeekMovies = () => dispatch => {
  dispatch(fetchLoading());
 
  MOVIE_DB_API_V_3.discoverMovie({
    'region': 'FR',
    'sort_by': 'primary_release_date_desc',
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
