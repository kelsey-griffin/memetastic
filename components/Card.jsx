import React from "react";
// import styles from "./Board.module.css";

const Card = props => {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    // This is causing issues with boundaries of drag and drop
    // setTimeout(() => {
    // target.style.display = "none";
    // }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      holder={props.holder}
    >
      {props.children}
    </div>
  );
};

export default Card;
