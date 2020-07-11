document.addEventListener("DOMContentLoaded", function (event) {
  const start = document.getElementById("start-game");
  const end = document.getElementById("end-game");
  end.disabled = !end.disabled;
  let currentMemeLord = "1";

  const validateHand = hand => {
    hand.forEach(card => {
      if (card.holder === "1") return 1;

      return 2;
    });
  };

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
    // console.log("e.target", e.target);
    // console.log(e.target.parentElement.id);
    if (
      e.target.parentElement.id === "board-1" ||
      e.target.parentElement.id === "board-2"
    ) {
      e.target.draggable = false;
    }
  });

  document.addEventListener("drop", e => {
    console.log(e.target.children, "dropped");
    // validateHand(e.target.children);
  });
});
