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
    console.log(this.state.square);
  }

  render() {
    const { square } = this.state;
    return (
      <div className="board">
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
