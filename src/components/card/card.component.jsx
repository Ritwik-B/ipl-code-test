import React from 'react';

import './card.styles.css';

const Card = ({
  player: { Player_Name, Player_Id, Country, DOB, Batting_Hand, Bowling_Skill },
}) => (
  <div className="card-container">
    <img
      alt="player"
      src={`https://robohash.org/${Player_Id}?set=set2&size=180x180`}
    />
    <div className="card-info-container">
      <h2> {Player_Name} </h2>
      <div className="card-details">
        <p> Country: {Country} </p>
        <p> DOB: {DOB} </p>
        <p> Bat: {Batting_Hand} </p>
        <p> Bowl: {Bowling_Skill} </p>
      </div>
    </div>
  </div>
);

export default Card;
