import React from "react";
import styled from "styled-components";
const Button = styled.button`
  color: red;
  font-size: 15px;
  height: 50px;
  width: 100px;
`;

const Start = props => {
  return (
    <Button
      id={props.id}
      disabled={props.disabled}
      onClick={e => props.initialDraw()}
    >
      {props.children}
    </Button>
  );
};

const End = props => {
  return (
    <Button
      id={props.id}
      disabled={props.disabled}
      onClick={e => props.resetHands()}
    >
      {props.children}
    </Button>
  );
};

export { Start, End };
