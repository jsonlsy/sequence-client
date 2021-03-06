import { combineReducers } from 'redux';

import { reducer as socketReducer } from './modules/socket';
import { reducer as playersReducer } from './modules/players';
import { reducer as boardReducer } from './modules/board';
import { reducer as handReducer } from './modules/hand';
import { reducer as statusReducer } from './modules/status';
import { reducer as turnReducer } from './modules/turn';
import { reducer as winnerReducer } from './modules/winner';
import { reducer as roomReducer } from './modules/room';
import { reducer as deckReducer } from './modules/deck';
import { reducer as scoreReducer } from './modules/score';

// TODO: refactor redux modules
const reducers = combineReducers({
  socket: socketReducer,
  players: playersReducer,
  board: boardReducer,
  hand: handReducer,
  status: statusReducer,
  turn: turnReducer,
  winner: winnerReducer,
  room: roomReducer,
  deck: deckReducer,
  score: scoreReducer,
});

export default reducers;
