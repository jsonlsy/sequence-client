import { combineReducers } from 'redux';

import { reducer as socketReducer } from './modules/socket';
import { reducer as playersReducer } from './modules/players';
import { reducer as boardReducer } from './modules/board';
import { reducer as handReducer } from './modules/hand';

const reducers = combineReducers({
  socket: socketReducer,
  players: playersReducer,
  board: boardReducer,
  hand: handReducer,
});

export default reducers;
