const UPDATE = 'sequence/board/UPDATE';
const HIGHLIGHT = 'sequence/board/HIGHLIGHT';
const UNHIGHLIGHT = 'sequence/board/UNHIGHLIGHT';

export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, board: action.board };
    case HIGHLIGHT:
      return { ...state, highlight: { row: action.row, col: action.col } };
    case UNHIGHLIGHT:
      return { ...state, highlight: undefined };
    default:
      return state;
  }
};

export const updateBoard = (board) => ({ type: UPDATE, board });
export const highlightTile = (row, col) => ({ type: HIGHLIGHT, row, col });
export const unhighlightTile = (row, col) => ({ type: UNHIGHLIGHT, row, col });
