const UPDATE = 'sequence/score/UPDATE';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return { score: action.score };
    default:
      return state;
  }
};

export const updateScore = (score) => ({ type: UPDATE, score });
