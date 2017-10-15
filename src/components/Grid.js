import React, { Component } from 'react';
import Cell from './Cell';

class Grid extends Component {
  render() {
    let gridRows = this.props.rows.map((row, i) => {
      let gridRow = row.map((cell, j) => {
        return <Cell
                  key={j}
                  alive={cell.alive}
                  element={this.props.element} />
      });

      return (
        <tr key={i}>{gridRow}</tr>
      );
    });

    return (
      <table className='grid'>
        <tbody>
          {gridRows}
        </tbody>
      </table>
    );
  }
}

export default Grid;