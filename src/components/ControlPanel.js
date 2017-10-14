import React from 'react';
import PropTypes from 'prop-types';

function ControlPanel(props) {
  return (
    <div className='control-panel'>
      <button className='control-panel-button' onClick={props.handleStartClick}>
        Start
      </button>
      <button className='control-panel-button' onClick={props.handlePauseClick}>
        Pause
      </button>
      <button className='control-panel-button' onClick={props.handleClearClick}>
        Clear
      </button>
      <button className='control-panel-button' onClick={props.handleNewGridClick}>
        New Grid
      </button>
    </div>
  )
}

ControlPanel.propTypes = {
  handleStartClick: PropTypes.func.isRequired,
  handlePauseClick: PropTypes.func.isRequired,
  handleClearClick: PropTypes.func.isRequired,
  handleNewGridClick: PropTypes.func.isRequired
}

export default ControlPanel;