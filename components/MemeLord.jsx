import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
  max-height: 50px;
  max-width: 50px;
`;

const Name = styled.p`
  font-size: 25px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MemeLord = (props) => {
  return (
    <>
      <Div>
        {(props.identity === props.memeLord) &&
          <>
            <Name style={{color: "red"}}>
              MemeLord {props.identity}
            </Name>
            <Avatar src="https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"/>
          </>
        }
        {(props.identity !== props.memeLord) &&
          <>
            <Name>
              MemeLord {props.identity}
            </Name>
          </>
        }
      </Div>
    </>
  )
};

export default MemeLord;