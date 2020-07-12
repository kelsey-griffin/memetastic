import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: solid;
  height: 500px;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 80%;
  min-width: 85%;
`;

const checkIfPlayerWon = (props, sum) => {
  if (props.p1State.points + sum >= 100) {
    console.log("Player 1 wins");
  } else if (props.p1State.points + sum >= 100) {
    console.log("Player 2 wins");
  }
};

const changePlayerTurn = props => {
  if (props.memeLord === "1") {
    props.setMemeLord("2");
  } else {
    props.setMemeLord("1");
  }
};

export default function Board(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);

    if (props.id[0] === "b") {
      //don't allow card to be moved once dropped on a board
      card.setAttribute("draggable", "false");

      //only count point on board, not in hand
      //count the value of the cards on the board
      let sum = 0;
      [...e.target.children].forEach(elem => {
        switch (elem.querySelector(".card__name span").innerHTML) {
          case "Lose 50%":
            sum = sum / 2;
            break;
          case "2X Followers":
            sum = 2 * sum;
            break;
          case "DoomsDay":
            sum = 0;
            e.target.textContent = "";
            break;
          case "All Discard":
            props.setP1State({ ...props.p1State, hand: [] });
            props.setP2State({ ...props.p2State, hand: [] });
            break;
          case "Opponent Discard":
            if (props.id[props.id.length - 1] === "1") {
              props.setP2State({ ...props.p2State, hand: [] });
            } else {
              props.setP1State({ ...props.p1State, hand: [] });
            }
            break;
          case "Skip Opponent's Turn":
            changePlayerTurn(props);
            break;
          default:
            sum += parseInt(elem.querySelector(".card__value").innerHTML);
        }
      });

      //update the appropriate players' state
      if (props.id[props.id.length - 1] === "1") {
        props.setP1State({ ...props.p1State, points: sum });
      } else if (props.id[props.id.length - 1] === "2") {
        props.setP2State({ ...props.p2State, points: sum });
      }
      checkIfPlayerWon(props, sum);
      changePlayerTurn(props);
      console.log(props);
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
