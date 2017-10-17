import React, { Component } from 'react';
import Header from './Header';
import Grid from './Grid';
import ControlPanel from './ControlPanel';
import { connect } from 'react-redux';
import constants from './../constants';
const { types } = constants;

class Game extends Component {
  constructor(props) {
    super(props);
    this.startGame     = this.startGame.bind(this);
    this.pauseGame     = this.pauseGame.bind(this);
    this.clearGame     = this.clearGame.bind(this);
    this.newGame       = this.newGame.bind(this);
    this.changeElement = this.changeElement.bind(this);
    this.changeScheme  = this.changeScheme.bind(this);
  }

  nextGeneration() {
    this.props.dispatch({ type: types.NEXT_GEN });
  }

  startGame() {
    this.timeSinceStart = setInterval(() => this.nextGeneration(), 15);
  }

  pauseGame() {
    clearInterval(this.timeSinceStart);
  }

  clearGame() {
    this.props.dispatch({ type: types.CLEAR });
  }

  newGame() {
    this.props.dispatch({ type: types.RESTART });
  }

  changeElement(newElement) {
    this.props.dispatch({
      type: types.CHANGE_ELEMENT,
      newElement
    });
  }

  changeScheme(newColorScheme) {
    this.props.dispatch({
      type: types.CHANGE_COLOR_SCHEME,
      newColorScheme
    })
  }

  render() {
    const element = this.props.element;
    const colorScheme = this.props.colorScheme;
    return (
      <div>
        <Header
          generation={this.props.generation}
          element={element} />
        <div>
          <Grid
            rows={this.props.rows}
            element={element}
            colorScheme={colorScheme}/>
          <ControlPanel
            handleStartClick={this.startGame}
            handlePauseClick={this.pauseGame}
            handleClearClick={this.clearGame}
            handleNewGridClick={this.newGame}
            handleElementClick={this.changeElement}
            handleColorSchemeClick={this.changeScheme}
            element={element}
            colorScheme={colorScheme}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Game);

