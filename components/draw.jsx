//draw button
import React from "react";

const Draw = props => {
  return <button onClick={e => props.drawCards(1)}>Draw</button>;
};

export default Draw;
