import {
  FETCH_THIS_WEEK_MOVIES_SUCCESS,
  FETCH_LOADING,
  FETCH_MOVIE_INFO_SUCCESS,
} from '../actions/moviedb';

const initialState = {
  weekMovies: [],
  moviesPool: {},
  isLoading: false,
};

const extract = (data, initState) => {
  return data.reduce( (acc, movie) => {
    if (!acc[movie.id]) {
      acc[movie.id] = movie;
    }
    return acc;
  }, initState);
}

export const moviedb = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_THIS_WEEK_MOVIES_SUCCESS:
      return {
        ...state,
        weekMovies: action.payload.results.map(movie => movie.id),
        moviesPool: extract(action.payload.results, {...state.moviesPool}),
        isLoading: false,
      }
    case FETCH_MOVIE_INFO_SUCCESS:
      return {
        ...state,
        moviesPool: extract([action.payload], {...state.moviesPool}),
        isLoading: false,
      }
    default:
      return state
  }
}
