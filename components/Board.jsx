import React from "react";
import styled from "styled-components";

const Div = styled.div`
  border: solid;
  height: 100px;
  width: 100px;
`;

export default function Board(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
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