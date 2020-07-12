import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function GameOver({ winnerBool, player, winner }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const winnerBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">HEY, MEMELORD {player}: yOu WOn!</h2>
      <p id="simple-modal-description">Dig deal, but can you do it again?</p>
      <GameOver />
    </div>
  );

  const loserBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">yOU loSt!</h2>
      <p id="simple-modal-description">
        Wow, you're pretty not so very good at this.
      </p>
      <GameOver />
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      {winnerBool && handleOpen()}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {winner === player ? winnerBody : loserBody}
      </Modal>
    </div>
  );
}
