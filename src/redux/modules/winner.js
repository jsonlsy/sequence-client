const UPDATE = 'sequence/winner/UPDATE';

export const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return action.winner;
    default:
      return state;
  }
};

export const updateWinner = (winner) => ({ type: UPDATE, winner });
