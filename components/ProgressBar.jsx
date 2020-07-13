// source: https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl

import React from "react";
import GameOver from "./GameOver";

const checkIfPlayerWon = props => {
  const { points, memeLord } = props;

  if (points >= 100) {
    console.log(`Memelord ${memeLord} wins!`);
    return true;
  }
  return false;
};

const ProgressBar = props => {
  const { bgcolor, points } = props;

  const containerStyles = {
    width: "84%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: "10px 50px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${points}%`,
    maxWidth: "100%",
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  checkIfPlayerWon(props);
  console.log("player won? ==>", checkIfPlayerWon(props));
  return (
    <>
      {checkIfPlayerWon(props) && (
        <GameOver resetHands={props.resetHands} winner={props.memeLord} />
      )}
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${points}%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
