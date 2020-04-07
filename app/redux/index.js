import { combineReducers } from 'redux';
import paintingsReducer from './paintings';
import artistsReducer from './artists';

const appReducer = combineReducers({
  paintings: paintingsReducer,
  artists: artistsReducer,
});

export default appReducer;
