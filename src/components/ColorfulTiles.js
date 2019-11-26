import React, { Component } from 'react';
import Tile from './Tile';

const ColorfulTiles = props => {
    const letters = props.children.split('');
    const tileList = letters.map((letter, index) => (
      <Tile key={index} value={letter}></Tile>
    ));

    return <ul className={'tiles-container'}>{tileList}</ul>;
}

export default ColorfulTiles;