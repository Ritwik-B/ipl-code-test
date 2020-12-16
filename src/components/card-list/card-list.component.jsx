import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ playerData }) => (
  <div className="card-list">
    {playerData
      .filter((player, idx) => idx < 8)
      .map((player) => (
        <Card key={player.Player_Id} player={player} />
      ))}
  </div>
);

export default CardList;
