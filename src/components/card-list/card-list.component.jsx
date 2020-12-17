import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ entityData, filterCategory }) => {
  let categoryId;
  if (filterCategory === 'Player_Name') {
    categoryId = 'Player_Id';
  } else {
    categoryId = 'Team_Id';
  }

  return (
    <div className="card-list">
      {entityData.map((entity) => (
        <Card
          key={entity[categoryId]}
          entity={entity}
          filterCategory={filterCategory}
          categoryId={categoryId}
        />
      ))}
    </div>
  );
};

export default CardList;
