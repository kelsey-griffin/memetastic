import React, { useState, useEffect, useRef } from "react";
import Board from "./Board";
import Card from "./Card";
import Hand from "./Hand";
import Draw from "./draw";
import ProgressBar from "./ProgressBar";

import MemeLord from "../components/MemeLord";
import { Start, End } from "../components/start";
import { deck, FullDeck } from "../pages/cards";

const Game = props => {
  const [p1State, setP1State] = useState({ points: 0, hand: [] });
  const [p2State, setP2State] = useState({ points: 0, hand: [] });
  const [memeLord, setMemeLord] = useState("1");
  
  const drawCards = num => {
    const drawnCards = [];
    console.log('card drawn')
    // drawnCards gets 3 random cards
    for (let i = 0; i < num; i++) {
      const randomNumber = Math.floor(Math.random() * deck.length);
      drawnCards.push(deck[randomNumber]);
    }

    return drawnCards;
  };

  const resetHands = () => {
    setP1State({ ...p1State, hand: [] });
    setP2State({ ...p2State, hand: [] });
  };

  const initialDraw = () => {
      setP1State({ ...p1State, hand: drawCards(3) });
      setP2State({ ...p2State, hand: drawCards(3) });
  };

  const drawNewCard = () => {
    if (memeLord === "1") {
      setP1State({ ...p1State, hand: [...p1State.hand, drawCards(1)[0]]});
    } else {
      setP1State({ ...p2State, hand: [...p2State.hand, drawCards(1)[0]]});
    }
    
    console.log('p1 hand', p1State.hand)
    console.log('p2 hand', p2State.hand)
  };

  return (
    <>
      <Start id="start-game" disabled={false} initialDraw={initialDraw}>
        START
      </Start>
      <End id="end-game" disabled={false} resetHands={resetHands}>
        END
      </End>
      <Draw drawCards={drawNewCard} />
      <MemeLord identity="1"></MemeLord>
      <ProgressBar bgcolor={"#ff3c28"} points={p1State.points} />

      <Board
        id="board-1"
        className="board"
        setP1State={setP1State}
        p1State={p1State}
      >
        Player 1's Board
      </Board>
      <Board id="hand-1" className="board">
        Player 1's Hand
        <Hand cards={p1State.hand} />
      </Board>
      <MemeLord identity="2"></MemeLord>
      <ProgressBar bgcolor={"#ff3278"} points={p2State.points} />
      <Board
        id="board-2"
        className="board"
        setP2State={setP2State}
        p2State={p2State}
      >
        Player 2's Board
      </Board>
      <Board id="hand-2" className="board">
        Player 2's Hand
        <Hand cards={p2State.hand} />
      </Board>
    </>
  );
};

export default Game;
