import React from "react";
import CardMUI from "@material-ui/core/Card";
import { CardMedia, CardContent, CardHeader } from "@material-ui/core";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

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
    <Draggable draggableId={props.id} index={props.index}>
      {provided => (
        <CardMUI
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardHeader
            className="card__name"
            title={props.memeName}
            titleTypographyProps={{ variant: "subtitle1" }}
          />
          <CardMedia
            component="img"
            draggable="false"
            alt={props.memeName}
            image={props.src}
            title={props.memeName}
            height="140"
          />
          <CardContent>
            {props.value === 0 ? (
              <span>SPeCiaL CaRD</span>
            ) : (
              <>
                <span>Followers: </span>
                <span className="card__value">{props.value}</span>
              </>
            )}
          </CardContent>
        </CardMUI>
      )}
    </Draggable>
  );
};

export default Card;
