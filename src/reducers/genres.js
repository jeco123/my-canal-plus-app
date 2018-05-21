import {
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_LOADING,
} from '../actions/genres';

const initialState = {
  genres: [],
  isLoading: false,
};

export const genres = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
