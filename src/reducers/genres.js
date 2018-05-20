const LOAD_GENRES_SUCCESS = 'LOAD_GENRES_SUCCESS'

const initialState = {
  genres: [],
};

export const genres = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      }
    default:
      return state
  }
}
