import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.alive !== nextProps.alive;
  }

  aliveClass() {
    const numColors = 3;
    const aliveNum = Math.floor(numColors*Math.random());
    return `alive${aliveNum}`;
  }

  render() {
    const isAlive = this.props.alive;
    const className = isAlive ? `cell ${this.aliveClass()}` : 'cell dead';
    return (
      <td className={className}></td>
    );
  }
}

Cell.propTypes = {
  alive: PropTypes.bool.isRequired
}

export default Cell;