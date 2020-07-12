//draw button
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  flex: 2;
  min-height: 100px;
  align-self: center;
`;

const Draw = props => {
  return <Button onClick={e => props.drawCards(1)}>Draw</Button>;
};

export default Draw;
