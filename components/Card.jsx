import React from "react";
import CardMUI from "@material-ui/core/Card";
import { CardMedia, CardContent, CardHeader } from "@material-ui/core";
import styled from "styled-components";

const Div = styled.div`
  width: 200px;
  margin: 10px 5px;
  border: solid 0.5px gray;
`;
const Card = props => {
  const dragStart = e => {
    const target = e.target;
    // console.log("e.target ===> ", e.target);
    e.dataTransfer.setData("card_id", target.id);

    // This is causing issues with boundaries of drag and drop
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <Div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      holder={props.holder}
    >
      <CardMUI>
        <CardHeader 
          className="card__name" 
          title={props.memeName}
          titleTypographyProps={{variant: 'subtitle1'}}
        />
        <CardMedia
          component="img"
          id={props.id} //need to drag card not just image
          alt={props.memeName}
          image={props.src}
          title={props.memeName}
          height="140"
        />
        <CardContent>
          Followers: <span className="card__value">{props.value}</span>
        </CardContent>
      </CardMUI>
    </Div>
  );
};

export default Card;
