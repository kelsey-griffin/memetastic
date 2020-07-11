import React from "react";
// import styles from "./Board.module.css";

const Card = props => {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <div>
      <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card;
