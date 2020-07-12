//cards in player's hand

import React, { useState } from "react";
import Card from "./Card";
import _uniqueId from "lodash/uniqueId";
import styled from "styled-components";

const List = styled.ul`
  background: palevioletred;
`;
const Hand = ({ cards }) => {
  const cardList = cards.map((card, index) => {
    const id = _uniqueId("card-");

    return (
      <Card
        key={index}
        id={id}
        className="card"
        draggable="true"
        holder="1"
        memeName={card.memeName}
        value={card.points}
        src={card.image}
      >
        {/* <p>
          <span className="card__name">{card.memeName}</span>
          <span className="card__value"> {card.points}</span>
        </p> */}
      </Card>
    );
  });
  return <List>{cardList}</List>;
};

export default Hand;
