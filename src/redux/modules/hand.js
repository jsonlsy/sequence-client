const UPDATE = 'sequence/hand/UPDATE';

export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case UPDATE:
      return action.hand;
    default:
      return state;
  }
};

export const updateHand = (hand) => ({ type: UPDATE, hand });
