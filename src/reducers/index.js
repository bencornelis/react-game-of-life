import generateCells from './generate-cells';
import nextGeneration from './next-generation';
import constants from './../constants';
const { defaultState, types, dimensions } = constants;

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.NEXT_GEN:
      return Object.assign({}, state, {
        rows: nextGeneration(state.rows),
        generation: state.generation + 1
      });
    case types.CLEAR:
      return Object.assign({}, state, {
        rows: generateCells(dimensions.grid[state.size], 0),
        generation: 0
      });
    case types.RESTART:
      return Object.assign({}, state, {
        rows: generateCells(dimensions.grid[state.size]),
        generation: 0
      });
    case types.CHANGE_ELEMENT:
      return Object.assign({}, state, {
        element: action.newElement
      });
    case types.CHANGE_COLOR_SCHEME:
      return Object.assign({}, state, {
        colorScheme: action.newColorScheme
      });
    default:
      return state;
  }
}