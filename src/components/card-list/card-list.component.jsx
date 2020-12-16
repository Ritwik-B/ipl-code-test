import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = (props) => (
  <div className="card-list">
    {props.players.map((player) => (
      <Card key={player.Player_Id} player={player} />
    ))}
  </div>
);

export default CardList;
