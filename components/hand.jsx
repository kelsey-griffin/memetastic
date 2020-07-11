//cards in player's hand

import React from "react";
import Card from "./Card";

const Hand = ({ cards }) => {
  console.log("cards ===> ", cards);
  const cardList = cards.map((card, index) => {
    console.log("in hand==> ", card);
    return (
      <Card
        key={index}
        id="testCard"
        className="card"
        draggable="true"
        holder="1"
      >
        {card.memeName}
      </Card>
    );
  });
  return cardList;
};

export default Hand;
