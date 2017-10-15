import generateCells from './reducer-utilities';
import nextGeneration from './next-generation';

const NUM_ROWS = 30;
const NUM_COLS = 60;

const initialState = {
  rows: generateCells(NUM_ROWS, NUM_COLS),
  generation: 0,
  element: 'WATER'
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'NEXT_GEN':
      const newRows = nextGeneration(state.rows);
      return Object.assign({}, state, {
        rows: newRows,
        generation: state.generation + 1
      });
    case 'CLEAR':
      const aliveProbability = 0;
      const deadRows = generateCells(NUM_ROWS, NUM_COLS, aliveProbability);
      return Object.assign({}, state, {
        rows: deadRows,
        generation: 0
      });
    case 'RESTART':
      return Object.assign({}, state, {
        rows: generateCells(NUM_ROWS, NUM_COLS),
        generation: 0
      });
    case 'CHANGE_ELEMENT':
      const { newElement } = action;
      return Object.assign({}, state, {
        element: newElement
      });
    default:
      return state;
  }
}