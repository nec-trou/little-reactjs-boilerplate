import React, { Component } from "react";
import Tile from './Tile'

class ColorfulTiles extends Component {
  constructor(props) {
    super(props);
    this.letters = props.children.split("");
    this.tileList = this.letters.map((letter, index) => (
      <Tile key={index} value={letter}></Tile>
    ));
  }

  render() {
    return <ul className={"tiles-container"}>{this.tileList}</ul>;
  }
}

export default ColorfulTiles;
