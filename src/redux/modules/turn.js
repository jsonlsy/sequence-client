const UPDATE = 'sequence/turn/UPDATE';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return { turnToPlay: action.turnToPlay };
    default:
      return state;
  }
};

export const updateTurnToPlay = (turnToPlay) => ({ type: UPDATE, turnToPlay });
