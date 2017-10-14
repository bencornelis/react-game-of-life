import generateCells from './reducer-utilities';
import nextGeneration from './next-generation';

const NUM_ROWS = 20;
const NUM_COLS = 60;

const initialState = {
  rows: generateCells(NUM_ROWS, NUM_COLS),
  generation: 0
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'NEXT_GEN':
      const newRows = nextGeneration(state.rows);
      return {
        rows: newRows,
        generation: state.generation + 1
      }
    case 'CLEAR':
      const aliveProbability = 0;
      const deadRows = generateCells(NUM_ROWS, NUM_COLS, aliveProbability);
      return {
        rows: deadRows,
        generation: 0
      }
    case 'RESTART':
      return {
        rows: generateCells(NUM_ROWS, NUM_COLS),
        generation: 0
      }
    default:
      return state;
  }
}