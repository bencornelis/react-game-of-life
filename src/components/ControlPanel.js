import React from 'react';
import PropTypes from 'prop-types';
import constants from './../constants';
const { elements, colorSchemes } = constants;

function ControlPanel(props) {
  const elementClass  = `button-${props.element.toLowerCase()}`;
  const buttonClasses = `control-panel-button ${elementClass}`;
  return (
    <div className='control-panel'>
      <button className={buttonClasses} onClick={props.handleStartClick}>
        Start
      </button>
      <button className={buttonClasses} onClick={props.handlePauseClick}>
        Pause
      </button>
      <button className={buttonClasses} onClick={props.handleClearClick}>
        Clear
      </button>
      <button className={buttonClasses} onClick={props.handleNewGridClick}>
        New Grid
      </button>
      <br />
      <br />
      <button
        className={buttonClasses}
        onClick={() => props.handleElementClick(elements.WATER)}>
        Water
      </button>
      <button
        className={buttonClasses}
        onClick={() => props.handleElementClick(elements.FIRE)}>
        Fire
      </button>
      <button
        className={buttonClasses}
        onClick={() => props.handleColorSchemeClick(colorSchemes.SINGLE)}>
        Single
      </button>
      <button
        className={buttonClasses}
        onClick={() => props.handleColorSchemeClick(colorSchemes.MULTI)}>
        Multi
      </button>
    </div>
  )
}

ControlPanel.propTypes = {
  handleStartClick: PropTypes.func.isRequired,
  handlePauseClick: PropTypes.func.isRequired,
  handleClearClick: PropTypes.func.isRequired,
  handleNewGridClick: PropTypes.func.isRequired,
  handleElementClick: PropTypes.func.isRequired,
  handleColorSchemeClick: PropTypes.func.isRequired,
  element: PropTypes.string.isRequired
}

export default ControlPanel;