import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: solid;
  height: 100px;
  padding: 1em;
`;

export default function Board(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);

    // const lose50 = new MemeCard("Lose 50%", 0);
    // const doublePoints = new MemeCard("2X Followers", 0);
    // const clearBoard = new MemeCard("DoomsDay", 0);
    // const allDiscard = new MemeCard("All Discard");
    // const opponentDiscard = new MemeCard("Opponent Discard", 0);
    // const skipTurn = new MemeCard("Skip Opponent's Turn", 0);

    if (props.id[0] === "b") {
      //only count point on board, not in hand
      //count the value of the cards on the board
      let sum = 0;
      [...e.target.children].forEach(elem => {
        console.log(
          "innerHTML ==> ",
          elem.querySelector(".card__name").innerHTML
        );
        switch (elem.querySelector(".card__name").innerHTML) {
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
            props.MemeLord === "1"
              ? props.setMemeLord("2")
              : props.setMemeLord("1");
            break;
          default:
            sum += parseInt(elem.querySelector(".card__value").innerHTML);
        }
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
