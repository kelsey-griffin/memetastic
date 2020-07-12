document.addEventListener("DOMContentLoaded", function (event) {
  const start = document.getElementById("start-game");
  const end = document.getElementById("end-game");
  setTimeout(() => {
    end.disabled = true;
  }, 1000)
  let currentMemeLord = "1";

  document.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.id === "start-game") {
      console.log("game is starting");

      //disable start button and enable end button
      e.target.disabled = true;
      end.disabled = !end.disabled;
    } else if (e.target.id === "end-game") {
      console.log("game is ending");

      //disable end button and enable start button
      e.target.disabled = true;
      start.disabled = !start.disabled;
    }
  });

  document.addEventListener("dragend", e => {
    const target = e.target.parentElement.id;

    // if the card is placed on a board, it cannot be moved
    if (target === "board-1" || target === "board-2") {
      e.target.draggable = false;
    }
  });
});
