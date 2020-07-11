import React from 'react';

const GameRules = (props) => {
  return (
    <>
      <h3>Rules:</h3>
      <ol>
        <li>
          Each MemeLord starts with 0 followers. The goal is to acquire 100 or more followers before your opponent. The first to 100 followers wins the game.
        </li>
        <li>
          Each MemeLord must always keep a minimum of 3 cards, and a maximum of 6 cards. If your hand goes below 3 cards in the event of special cards being played, you can redraw up until you reach the minimum 3 card limit.
        </li>
        <li>
          You can only play one card at a time.
        </li>
        <li>
          Each turn has a time limit of 15 seconds. If you do not take any action, the turn will be given to your opponent.
        </li>
      </ol>
    </>
  )
}

export default GameRules;