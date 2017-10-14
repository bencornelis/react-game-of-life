import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <h1 className='header'>Generation {props.generation}</h1>
  );
}

Header.propTypes = {
  generation: PropTypes.number.isRequired
}

export default Header;