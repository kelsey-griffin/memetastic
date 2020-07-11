import react, { useState } from "react";

const App = () => {
  const { hands, SetHands } = useState({ p1: [], p2: [] });

  document.addEventListener("DOMContentLoaded", function (event) {
    const start = document.getElementById("start-game");
    const end = document.getElementById("end-game");
    let currentMemeLord = "1";

    document.addEventListener("click", e => {
      if (e.target.id === "start-game") {
        console.log("game is starting");

        //disable start button and enable end button
        e.target.disabled = true;
        end.disabled = !end.disabled;

        //add cards to players' hands
      } else if (e.target.id === "end-game") {
        console.log("game is ending");

        //disable end button and enable start button
        e.target.disabled = true;
        start.disabled = !start.disabled;
      }
    });
  });
};
