import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: solid;
  height: 100px;
  width: 500px;
  padding: 1em;
`;

export default function Board(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);

    if (props.id[0] === "b") {
      //only count point on board, not in hand
      //count the value of the cards on the board
      let sum = 0;
      [...e.target.children].forEach(elem => {
        sum += parseInt(elem.querySelector(".card__value").innerHTML);
      });

      console.log("sum ==> ", sum);
      //update the appropriate players' state
      if (props.id[props.id.length - 1] === "1") {
        props.setP1State({ ...props.p1State, points: sum });
      } else if (props.id[props.id.length - 1] === "2") {
        props.setP2State({ ...props.p2State, points: sum });
      }
    }
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <Div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </Div>
  );
}
