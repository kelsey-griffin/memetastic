import React, { useState, useEffect } from "react";
import Board from "./Board";
import Card from "./Card";
import Hand from "./Hand";
import Draw from "./draw";
import MemeLord from "../components/MemeLord";
import { Start, End } from "../components/start";
import { deck, FullDeck } from "../pages/cards";

const Game = props => {
  const [p1State, setP1State] = useState({ points: 0, hand: [] });
  const [p2State, setP2State] = useState({ points: 0, hand: [] });

  const drawCards = num => {
    const newHand = [];

    // newHand gets 3 random cards
    for (let i = 0; i < num; i++) {
      const randomNumber = Math.floor(Math.random() * deck.length);
      newHand.push(deck[randomNumber]);
    }

    return newHand;
  };

  const resetHands = () => {
    // e.preventDefault();
    console.log("clicked reset");
    setP1State({ ...p1State, hand: [] });
    setP2State({ ...p2State, hand: [] });
    console.log("resetHands@@@@");
  };

  const initialDraw = () => {
    const p1Hand = drawCards(3);
    const p2Hand = drawCards(3);

    setP1State({ ...p1State, hand: p1Hand });
    setP2State({ ...p2State, hand: p2Hand });
    console.log("initial Draw@@@");
  };

  return (
    <>
      <Start id="start-game" disabled={false} initialDraw={initialDraw}>
        START
      </Start>
      <End id="end-game" disabled={false} resetHands={resetHands}>
        END
      </End>
      <Draw drawCards={drawCards} />
      <MemeLord identity="1"></MemeLord>
      <Board id="board-1" className="board">
        Player 1's Board
      </Board>
      <Board id="hand-1" className="board">
        Player 1's Hand
        <Hand cards={p1State.hand} />
      </Board>
      <MemeLord identity="2"></MemeLord>
      <Board id="board-2" className="board">
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
