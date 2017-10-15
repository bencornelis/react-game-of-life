import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.aliveClass = this.aliveClass.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.alive !== nextProps.alive ||
           this.props.element !== nextProps.element;
  }

  aliveClass() {
    const numColors = 3;
    const aliveNum = Math.floor(numColors*Math.random());
    const element = this.props.element.toLowerCase();
    return `alive-${element}-${aliveNum}`;
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