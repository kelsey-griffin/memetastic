//cards in player's hand

import React, { useState } from "react";
import Card from "./Card";
import _uniqueId from "lodash/uniqueId";

const Hand = ({ cards }) => {
  const cardList = cards.map((card, index) => {
    // const [id] = useState(_uniqueId("card-"));
    const id = _uniqueId("card-");
    // console.log("in hand==> ", card);
    return (
      <Card key={index} id={id} className="card" draggable="true" holder="1">
        <p>
          <span className="card__name">{card.memeName}:</span>
          <span className="card__value"> {card.points}</span>
        </p>
      </Card>
    );
  });
  return cardList;
};

export default Hand;
