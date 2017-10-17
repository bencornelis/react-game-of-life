import React, { Component } from 'react';
import PropTypes from 'prop-types';
import constants from './../constants';
const { colorSchemes } = constants;

class Cell extends Component {
  constructor(props) {
    super(props);
    this.aliveClass = this.aliveClass.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.alive       !== nextProps.alive       ||
           this.props.element     !== nextProps.element     ||
           this.props.colorScheme !== nextProps.colorScheme ||
           this.props.dimension   !== nextProps.dimension;
  }

  aliveClass() {
    const element = this.props.element.toLowerCase();
    let classNum;

    if (this.props.colorScheme === colorSchemes.SINGLE) {
      classNum = 0;
    } else {
      const numColors = 3;
      classNum = Math.floor(numColors * Math.random());
    }

    return `alive-${element}-${classNum}`;
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
  alive: PropTypes.bool.isRequired,
  element: PropTypes.string.isRequired,
  colorScheme: PropTypes.string.isRequired,
}

export default Cell;