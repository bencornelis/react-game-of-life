import React, { Component } from 'react';
import Header from './Header';
import Grid from './Grid';
import { connect } from 'react-redux';

class Game extends Component {
  componentDidMount() {
    this.timeSinceStart = setInterval(() =>
      this.nextGeneration(),
      1
    );
  }

  nextGeneration() {
    this.props.dispatch({ type: 'NEXT_GEN' });
  }

  componentWillUnmount() {
    clearInterval(this.timeSinceStart);
  }

  render() {
    return (
      <div>
        <Header generation={this.props.generation} />
        <Grid rows={this.props.rows} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Game);

