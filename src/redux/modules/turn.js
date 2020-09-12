const UPDATE = 'sequence/turn/UPDATE';
const UPDATE_TURNS = 'sequence/turn/UPDATE_TURNS';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, turn: action.turn, turnToPlay: action.turnToPlay };
    case UPDATE_TURNS:
      return { ...state, turns: action.turns };
    default:
      return state;
  }
};

export const updateTurnToPlay = (turn, turnToPlay) => ({ type: UPDATE, turn, turnToPlay });
export const updateTurns = (turns) => ({ type: UPDATE_TURNS, turns });
