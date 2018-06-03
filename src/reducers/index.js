import { combineReducers } from 'redux';
import { moviedb } from './moviedb';
import { header } from './header';

export default combineReducers({
  header,
  moviedb,
});
