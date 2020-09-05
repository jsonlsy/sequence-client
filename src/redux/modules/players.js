const UPDATE_PLAYERS = 'sequence/players/UPDATE_PLAYERS';
const UPDATE_ADMIN = 'sequence/players/UPDATE_ADMIN';

export const reducer = (state = { players: [] }, action = {}) => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return { ...state, players: action.players };
    case UPDATE_ADMIN:
      return { ...state, admin: action.admin };
    default:
      return state;
  }
};

export const updatePlayers = (players) => ({ type: UPDATE_PLAYERS, players });
export const updateAdmin = (admin) => ({ type: UPDATE_ADMIN, admin });
