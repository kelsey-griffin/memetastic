//cards in player's hand

import React from "react";
import Card from "./Card";

const Hand = ({ cards }) => {
  const cardList = cards.map((card, index) => {
    return (
      <Card key={index} className="card" draggable="true">
        {card}
      </Card>
    );
  });
  return cardList;
};

export default Hand;
