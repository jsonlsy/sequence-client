const CREATE = 'sequence/room/CREATE';
const JOIN = 'sequence/room/JOIN';

export const reducer = (state = { set: false }, action = {}) => {
  switch (action.type) {
    case CREATE:
      return { set: true, room: null };
    case JOIN:
      if (action.room) {
        return { set: true, room: action.room };
      }
      return state;
    default:
      return state;
  }
};

export const createRoom = () => ({ type: CREATE });
export const joinRoom = (room) => ({ type: JOIN, room });
