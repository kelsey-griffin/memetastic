//cards in player's hand

import React, { useState } from "react";
import Card from "./Card";
import _uniqueId from "lodash/uniqueId";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 80%;
  min-width: 85%;
`;

const Hand = ({ cards }) => {
  const cardList = cards.map((card, index) => {
    const id = _uniqueId("card-");

    return (
      <Card
        key={index}
        index={index}
        id={id}
        className="card"
        draggable="true"
        holder="1"
        memeName={card.memeName}
        value={card.points}
        src={card.image}
      ></Card>
    );
  });
  return <List>{cardList}</List>;
};

export default Hand;
