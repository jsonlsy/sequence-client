const UPDATE = 'sequence/deck/UPDATE';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return { deck: action.deck };
    default:
      return state;
  }
};

export const updateDeck = (deck) => ({ type: UPDATE, deck });

