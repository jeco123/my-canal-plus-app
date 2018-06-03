import {
  RESET,
  UPDATE_BACKGROUND,
} from '../actions/header';

const defaultBackground = '/background.jpg';
const initialState = {
  defaultBackground,
  currentBackground: defaultBackground,
};

export const header = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        currentBackground: state.defaultBackground,
      }
    case UPDATE_BACKGROUND:
      return {
        ...state,
        currentBackground: action.payload,
      }
    default:
      return state
  }
}
