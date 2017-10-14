const getNeighbors = (x, y, grid) => {
  let numRows = grid.length;
  let numCols = grid[0].length;
  let neighbors = [];

  for (let j = y - 1; j <= y + 1; j++) {
    for (let i = x - 1; i <= x + 1; i++) {
      let inGrid = (j >= 0 && j < numRows) && (i >= 0 && i < numCols)
      if ((i !== x || j !== y) && inGrid) {
        neighbors.push(grid[j][i]);
      }
    }
  }
  return neighbors;
}

const nextGeneration = prevGen => {
  let numRows = prevGen.length;
  let numCols = prevGen[0].length;
  let nextGen = [];

  for (let y = 0; y < numRows; y++) {
    let row = [];
    for (let x = 0; x < numCols; x++) {
      let neighbors = getNeighbors(x, y, prevGen);
      let numAlive  = neighbors.filter(cell => cell.alive).length;

      let oldCell = prevGen[y][x];
      let newCell;

      if (oldCell.alive) {
        if (numAlive < 2 || numAlive > 3) {
          newCell = { alive: false };
        } else {
          newCell = oldCell
        }
      } else {
        if (numAlive === 3) {
          newCell = { alive: true };
        } else {
          newCell = oldCell;
        }
      }
      row.push(newCell)
    }
    nextGen.push(row);
  }
  return nextGen;
}

export default nextGeneration;