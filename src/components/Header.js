import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const elementClass = `header-${props.element.toLowerCase()}`;
  const headerClasses = `header ${elementClass}`;
  return (
    <h1 className={headerClasses}>Generation {props.generation}</h1>
  );
}

Header.propTypes = {
  generation: PropTypes.number.isRequired,
  element: PropTypes.string.isRequired
}

export default Header;