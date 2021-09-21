import React, { Component } from 'react';
import Box from '../box/Box';

import './Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      square: ['', '', '', '', '', '', '', '', ''],
      currentSign: 'x',
    };

    this.handleClick = this.handleClick.bind(this);
    this.restart = this.restart.bind(this);
  }

  handleClick(id) {
    if (this.state.square[id] === 'x' || this.state.square[id] === 'o') {
      return;
    }
    const newArr = [
      ...this.state.square.slice(0, id),
      this.state.currentSign,
      ...this.state.square.slice(id + 1),
    ];
    if (this.state.currentSign === 'x') this.setState({ currentSign: 'o' });
    else this.setState({ currentSign: 'x' });
    this.setState({
      square: newArr,
    });
  }

  restart() {
    this.setState({ square: ['', '', '', '', '', '', '', '', ''] });
  }

  render() {
    const { square, currentSign } = this.state;

    if (
      (square[0] === 'x' && square[3] === 'x' && square[6] === 'x') ||
      (square[3] === 'x' && square[4] === 'x' && square[5] === 'x') ||
      (square[6] === 'x' && square[7] === 'x' && square[8] === 'x') ||
      (square[8] === 'x' && square[5] === 'x' && square[2] === 'x') ||
      (square[0] === 'x' && square[1] === 'x' && square[2] === 'x') ||
      (square[0] === 'x' && square[4] === 'x' && square[8] === 'x') ||
      (square[6] === 'x' && square[4] === 'x' && square[2] === 'x')
    ) {
      return (
        <div className="win">
          <div className="text">X Wins</div>
          <button className="restart-btn" onClick={this.restart}>
            Restart
          </button>
        </div>
      );
    }

    if (
      (square[0] === 'o' && square[3] === 'o' && square[6] === 'o') ||
      (square[3] === 'o' && square[4] === 'o' && square[5] === 'o') ||
      (square[6] === 'o' && square[7] === 'o' && square[8] === 'o') ||
      (square[8] === 'o' && square[5] === 'o' && square[2] === 'o') ||
      (square[0] === 'o' && square[1] === 'o' && square[2] === 'o') ||
      (square[0] === 'o' && square[4] === 'o' && square[8] === 'o') ||
      (square[6] === 'o' && square[4] === 'o' && square[2] === 'o')
    ) {
      return (
        <div className="win">
          <div className="text">O Wins</div>
          <button className="restart-btn" onClick={this.restart}>
            Restart
          </button>
        </div>
      );
    }

    if (
      square[0] !== '' &&
      square[1] !== '' &&
      square[2] !== '' &&
      square[3] !== '' &&
      square[4] !== '' &&
      square[5] !== '' &&
      square[6] !== '' &&
      square[7] !== '' &&
      square[8] !== ''
    ) {
      return (
        <div className="win">
          <div className="text">Draw</div>
          <button className="restart-btn" onClick={this.restart}>
            Restart
          </button>
        </div>
      );
    }

    return (
      <div className="board">
        <div className="current">Current turn: {currentSign}</div>
        <Box fill={square[0]} id={0} handleClick={this.handleClick} />
        <Box fill={square[1]} id={1} handleClick={this.handleClick} />
        <Box fill={square[2]} id={2} handleClick={this.handleClick} />
        <Box fill={square[3]} id={3} handleClick={this.handleClick} />
        <Box fill={square[4]} id={4} handleClick={this.handleClick} />
        <Box fill={square[5]} id={5} handleClick={this.handleClick} />
        <Box fill={square[6]} id={6} handleClick={this.handleClick} />
        <Box fill={square[7]} id={7} handleClick={this.handleClick} />
        <Box fill={square[8]} id={8} handleClick={this.handleClick} />
      </div>
    );
  }
}
