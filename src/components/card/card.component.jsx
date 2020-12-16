import React from 'react';

import './card.styles.css';

const Card = (props) => (
  <div className="card-container">
    <img
      alt="player"
      src={`https://robohash.org/${props.player.Player_Id}?set=set2&size=180x180`}
    />
    <div className="card-info-container">
      <h2> {props.player.Player_Name} </h2>
      <div className="card-details">
        <p> Country: {props.player.Country} </p>
        <p> DOB: {props.player.DOB} </p>
        <p> Bat: {props.player.Batting_Hand} </p>
        <p> Bowl: {props.player.Bowling_Skill} </p>
      </div>
    </div>
  </div>
);

export default Card;
