document.addEventListener("DOMContentLoaded", function(event) { 
  const start = document.getElementById('start-game');
  const end = document.getElementById('end-game');

  document.addEventListener('click', (e) => {
    if (e.target.id === "start-game") {
      console.log('game is starting');

      //disable start button and enable end button
      e.target.disabled = true;
      end.disabled = !end.disabled;
    } else if (e.target.id === "end-game") {
      console.log('game is ending');

      //disable end button and enable start button
      e.target.disabled = true;
      start.disabled = !start.disabled;
    }
  });

});