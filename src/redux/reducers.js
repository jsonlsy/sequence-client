import { combineReducers } from 'redux';

import { reducer as socketReducer } from './modules/socket';
import { reducer as playersReducer } from './modules/players';
import { reducer as boardReducer } from './modules/board';
import { reducer as handReducer } from './modules/hand';
import { reducer as statusReducer } from './modules/status';

const reducers = combineReducers({
  socket: socketReducer,
  players: playersReducer,
  board: boardReducer,
  hand: handReducer,
  status: statusReducer,
});

export default reducers;
