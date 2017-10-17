import generateCells from './../reducers/generate-cells';
import * as dimensions from './Dimensions';
import * as sizes from './Sizes';
import * as elements from './Elements';
import * as colorSchemes from './ColorSchemes';

const DEFAULT_SIZE    = sizes.MEDIUM;
const DEFAULT_ELEMENT = elements.FIRE;
const DEFAULT_SCHEME  = colorSchemes.SINGLE;

export const defaultState = {
  rows: generateCells(dimensions.grid[DEFAULT_SIZE]),
  generation: 0,
  element: DEFAULT_ELEMENT,
  size: DEFAULT_SIZE,
  colorScheme: DEFAULT_SCHEME,
}