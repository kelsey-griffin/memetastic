import React, { useState } from "react";
import Board from "./Board";
import Card from "./Card";
import Hand from "./Hand";
import MemeLord from "../components/MemeLord";

const Game = props => {
  const [game, setGame] = useState({
    p1: { points: 0, hand: [] },
    p2: { points: 0, hand: ["abc", "123"] },
  });

  return (
    <>
      <MemeLord identity="1"></MemeLord>
      <Board id="board-1" className="board">
        Player 1's Board
        <Card draggable="true" id="asdf" className="card" holder="1">
          Card 1
        </Card>
      </Board>
      <Board id="hand-1" className="board">
        Player 1's Hand
        <Hand cards={game.p1.hand} />
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
        <Hand cards={game.p2.hand} />
        {/* <Card draggable="true" id="fdsa" className="card">
          Card 2
        </Card> */}
      </Board>
    </>
  );
};

export default Game;
