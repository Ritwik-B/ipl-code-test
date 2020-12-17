import React from 'react';

import './card.styles.css';

const Card = ({ entity, filterCategory, categoryId }) => (
  <div className="card-container">
    <img
      alt="entity"
      src={`https://robohash.org/${entity[categoryId]}?set=set2&size=180x180`}
    />
    <div className="card-info-container">
      {filterCategory === 'Player_Name' ? (
        <React.Fragment>
          <h2> {entity.Player_Name} </h2>
          <div className="card-details">
            <p> Country: {entity.Country} </p>
            <p> DOB: {entity.DOB} </p>
            <p> Bat: {entity.Batting_Hand} </p>
            <p> Bowl: {entity.Bowling_Skill} </p>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h2> {entity.Team_Name} </h2>
          <p> Short Name: {entity.Team_Short_Code} </p>
        </React.Fragment>
      )}
    </div>
  </div>
);

export default Card;
