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

  const resetGame = () => {
    setP1State({ points: 0, hand: [] });
    setP2State({ points: 0, hand: [] });
  };

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
    setP1State({ ...p1State, hand: [] });
    setP2State({ ...p2State, hand: [] });
  };

  // const gameOver = bool => {
  //   console.log("bool ==> ", bool);
  //   return bool;
  // };

  const initialDraw = () => {
    setP1State({ ...p1State, hand: drawCards(3) });
    setP2State({ ...p2State, hand: drawCards(3) });
  };

  const drawNewCard = () => {
    if (memeLord === "1") {
      setP1State({ ...p1State, hand: [...p1State.hand, drawCards(1)[0]] });
    } else {
      setP2State({ ...p2State, hand: [...p2State.hand, drawCards(1)[0]] });
    }
  };

  return (
    <>
      <Start id="start-game" disabled={false} initialDraw={initialDraw}>
        START
      </Start>
      <End id="end-game" disabled={false} resetHands={resetHands}>
        END
      </End>
      <Main>
        <Player>
          <MemeLord identity="1" memeLord={memeLord} />
          <ProgressBar
            bgcolor={"#ff3c28"}
            points={p1State.points}
            memeLord={1}
            // gameOver={gameOver}
            resetGame={resetGame}
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
            Player 1's Hand
            <Hand cards={p1State.hand} />
          </Board>
        </Player>
        <Draw drawCards={drawNewCard} memeLord={memeLord} />
        <Player>
          <MemeLord identity="2" memeLord={memeLord} />
          <ProgressBar
            // gameOver={gameOver}
            resetGame={resetGame}
            bgcolor={"#ff3278"}
            points={p2State.points}
            memeLord={2}
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
            Player 2's Hand
            <Hand cards={p2State.hand} />
          </Board>
        </Player>
      </Main>
    </>
  );
};

export default Game;
