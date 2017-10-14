import React, { Component } from 'react';
import Header from './Header';
import Grid from './Grid';
import ControlPanel from './ControlPanel';
import { connect } from 'react-redux';

class Game extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.clearGame = this.clearGame.bind(this);
    this.newGame   = this.newGame.bind(this);
  }

  nextGeneration() {
    this.props.dispatch({ type: 'NEXT_GEN' });
  }

  startGame() {
    this.timeSinceStart = setInterval(() => this.nextGeneration(), 15);
  }

  pauseGame() {
    clearInterval(this.timeSinceStart);
  }

  clearGame() {
    this.props.dispatch({ type: 'CLEAR' });
  }

  newGame() {
    this.props.dispatch({ type: 'RESTART' });
  }

  render() {
    return (
      <div>
        <Header generation={this.props.generation} />
        <div>
          <Grid rows={this.props.rows} />
          <ControlPanel
            handleStartClick={this.startGame}
            handlePauseClick={this.pauseGame}
            handleClearClick={this.clearGame}
            handleNewGridClick={this.newGame}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Game);

