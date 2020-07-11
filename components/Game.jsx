import React, { useState, useEffect } from "react";
import Board from "./Board";
import Card from "./Card";
import Hand from "./Hand";
import MemeLord from "../components/MemeLord";
import { Start, End } from "../components/start";
import { deck, FullDeck } from "../pages/cards";

const drawCards = num => {
  const newHand = [];

  // newHand gets 3 random cards
  for (let i = 0; i < num; i++) {
    const randomNumber = Math.floor(Math.random() * deck.length);
    newHand.push(deck[randomNumber]);
  }

  return newHand;
};

const Game = props => {
  const [p1State, setP1State] = useState({ points: 0, hand: [] });
  const [p2State, setP2State] = useState({ points: 0, hand: [] });

  const initialDraw = () => {
    const p1Hand = drawCards(3);
    const p2Hand = drawCards(3);

    setP1State({ ...p1State, hand: p1Hand });
    setP2State({ ...p2State, hand: p2Hand });
  };

  return (
    <>
      <Start id="start-game" disabled={false} initialDraw={initialDraw}>
        START
      </Start>
      <End id="end-game" disabled={true}>
        END
      </End>
      <MemeLord identity="1"></MemeLord>
      <Board id="board-1" className="board">
        Player 1's Board
        <Card draggable="true" id="asdf" className="card" holder="1">
          Card 1
        </Card>
      </Board>
      <Board id="hand-1" className="board">
        Player 1's Hand
        <Hand cards={p1State.hand} />
        <Card draggable="true" id="fdsa" className="card" holder="1">
          Card 2
        </Card>
      </Board>
      <MemeLord identity="2"></MemeLord>
      <Board id="board-2" className="board">
        Player 2's Board
        {/* <Card draggable="true" id="asdf" className="card">
          Card 1
        </Card> */}
      </Board>
      <Board id="hand-2" className="board">
        Player 2's Hand
        <Hand cards={p2State.hand} />
        {/* <Card draggable="true" id="fdsa" className="card">
          Card 2
        </Card> */}
      </Board>
    </>
  );
};

export default Game;
