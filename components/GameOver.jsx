import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  border: 2px solid black;
  left: 25%;
  top: 25%;
  height: 50%;
  width: 60%;
  padding: 10px;
  z-index: 1000;
  background-color: #7fd82b;
  background-image: linear-gradient(
    319deg,
    #7fd82b 0%,
    #ef4063 37%,
    #e557c6 100%
  );
`;

const InnerDiv = styled.div`
  text-align: center;
`;

export default function GameOver(props) {
  const handleClose = () => {
    props.resetHands();
  };

  console.log("winner", props.winner, typeof props.winner);
  return (
    <Div>
      <InnerDiv>
        <h1>WINNER: MEMELORD {props.winner}</h1>
        <h2>LOSER: MEMELORD {props.winner === 1 ? 2 : 1}</h2>
        <img
          src="/static/images/lastgame.jpeg"
          alt="One Last Game Meme"
          className="lastgame"
        />
        <p>Thanks For Playing!</p>
        {/* <button onClick={handleClose}>CLOSE</button> */}
      </InnerDiv>
    </Div>
  );
}
