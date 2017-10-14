import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.alive !== nextProps.alive;
  }

  render() {
    const className = this.props.alive ? 'cell alive' : 'cell dead';
    return (
      <td className={className}></td>
    );
  }
}

Cell.propTypes = {
  alive: PropTypes.bool.isRequired
}

export default Cell;