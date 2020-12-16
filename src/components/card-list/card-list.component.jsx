import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ entityData }) => (
  <div className="card-list">
    {entityData
      .filter((entity, idx) => idx < 8)
      .map((entity) => (
        <Card key={entity.Player_Id} entity={entity} />
      ))}
  </div>
);

export default CardList;
