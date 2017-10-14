const generateCells = (numRows, numCols, aliveProbability=0.20) => {
  let cells = [];
  for (let y=0; y < numRows; y++) {
    let row = [];
    for (let x=0; x < numCols; x++) {
      let alive = Math.random() < aliveProbability;
      row.push({ alive: alive });
    }
    cells.push(row);
  }
  return cells;
}

export default generateCells;