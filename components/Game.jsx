import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Board from "./Board";
import Card from "./Card";
import Hand from "./Hand";
import Draw from "./draw";
import ProgressBar from "./ProgressBar";
import MemeLord from "../components/MemeLord";
import { Start, End } from "../components/start";
import { deck, FullDeck, specialDeck } from "../pages/cards";

const Main = styled.main`
  // border: solid;
  display: flex;
`;

const Player = styled.div`
  // border: solid;
  flex: 5;
`;

const Game = props => {
  const [p1State, setP1State] = useState({ points: 0, hand: [] });
  const [p2State, setP2State] = useState({ points: 0, hand: [] });
  const [memeLord, setMemeLord] = useState("1");

  const drawCards = num => {
    const drawnCards = [];

    // drawnCards gets 3 random cards
    for (let i = 0; i < num; i++) {
      const random1to5 = Math.floor(Math.random() * 5);
      //20% chance of drawing a Special Card
      if (random1to5 === 3) {
        const randomSpecial = Math.floor(Math.random() * specialDeck.length);
        drawnCards.push(specialDeck[randomSpecial]);
      } else {
        const randomRegular = Math.floor(Math.random() * deck.length);
        drawnCards.push(deck[randomRegular]);
      }
    }
    return drawnCards;
  };

  const resetHands = () => {
    // document.getElementById('board-1').textContent = "";
    // document.getElementById('board-2').textContent = "";

    // console.log(p1State)
    // console.log(p2State)
    
    // setP1State({ ...p1State, hand: [] });
    // setP2State({ ...p2State, hand: [] });

    // setP1State({ ...p1State});
    // setP2State({ ...p1State});
    // const player1Hand = document.getElementById('player-1-hand')
    // const cardID = Object.values(document.getElementById('player-1-hand').children)[0].id

    // // while (player1Hand.children.length > 1) {
    //   document.getElementById('player-1-hand').removeChild(document.getElementById(cardID))
    //   document.getElementById('player-1-hand').removeChild(document.getElementById(cardID))
    //   document.getElementById('player-1-hand').removeChild(document.getElementById(cardID))
    // // }
    

    // console.log(player1Hand)
    // document.getElementById('player-1-hand')
  };

  const initialDraw = () => {
    setP1State({ ...p1State, hand: drawCards(3) });
    setP2State({ ...p2State, hand: drawCards(3) });
  };

  const drawDisabled = () => {
    if (
      (memeLord === "1" && p1State.hand.length >= 6) ||
      (memeLord === "2" && p2State.hand.length >= 6)
    ) {
      return "true";
    }
    return "false";
  };
  console.log("btn disabled ==> ", drawDisabled());

  const drawNewCard = () => {
    //only allow player to draw if they have less than max 6 cards in hand
    if (memeLord === "1" && p1State.hand.length < 6) {
      setP1State({ ...p1State, hand: [...p1State.hand, drawCards(1)[0]] });
    } else if (memeLord === "2" && p2State.hand.length < 6) {
      setP2State({ ...p2State, hand: [...p2State.hand, drawCards(1)[0]] });
    }
  };

  // const resetGame = () => {
  //   setP1State({ points: 0, hand: [] });
  //   setP2State({ points: 0, hand: [] });
  // };

  return (
    <>
      <Start id="start-game" disabled={false} initialDraw={initialDraw}>
        START
      </Start>
      {/* <End id="end-game" disabled={false} resetHands={resetHands}>
        END
      </End> */}
      <Main>
        <Player>
          <MemeLord identity="1" memeLord={memeLord} />
          <ProgressBar
            bgcolor={"#ff3c28"}
            points={p1State.points}
            memeLord={1}
            resetHands={resetHands}
          />
          Player 1's Board
          <Board
            id="board-1"
            className="board"
            setP1State={setP1State}
            p1State={p1State}
            setP2State={setP2State}
            p2State={p2State}
            setMemeLord={setMemeLord}
            memeLord={memeLord}
          />
          <Board id="hand-1" className="board">
            {/* Player 1's Hand */}
            <Hand cards={p1State.hand} player={"player-1-hand"} />
          </Board>
        </Player>
        <Draw
          drawCards={drawNewCard}
          drawDisabled={drawDisabled}
          memeLord={memeLord}
        />
        <Player>
          <MemeLord identity="2" memeLord={memeLord} />
          <ProgressBar
            bgcolor={"#ff3278"}
            points={p2State.points}
            memeLord={2}
            resetHands={resetHands}
          />
          Player 2's Board
          <Board
            id="board-2"
            className="board"
            setP2State={setP2State}
            p2State={p2State}
            setP1State={setP1State}
            p1State={p1State}
            setMemeLord={setMemeLord}
            memeLord={memeLord}
          />
          <Board id="hand-2" className="board">
            {/* Player 2's Hand */}
            <Hand cards={p2State.hand} player={"player-2-hand"} />
          </Board>
        </Player>
      </Main>
    </>
  );
};

export default Game;
