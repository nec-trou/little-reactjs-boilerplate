import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'maroon'
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const { getRandom } = this;
    this.setState({
      bgColor: `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`
    });
  }

  getRandom(max, min = 0) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  render() {
    return (
      <li
        className={'tile'}
        onClick={this.changeColor}
        style={{ backgroundColor: this.state.bgColor }}
      >
        {this.props.value}
      </li>
    );
  }
}

export default Tile;