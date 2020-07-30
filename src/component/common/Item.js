import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Paragraph from "./Paragraph";

const StyledItem = styled.div`
  width: ${(props) => (props.type === "bottom" ? "60px" : props.type === "start" ? "108px" : "120px")};
  height: ${(props) => (props.type === "bottom" ? "60px" : props.type === "start" ? "108px" : "120px")};
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.type === "start" ? "flex-end" : "center")};
  background: ${(props) => (props.type === "start" ? props.background : "none")};
  &:hover {
    background: #ddd;
  }
  flex-wrap: wrap;
`;

function Item({ program, closeBottomMenu, onclick, type, ...rest }) {
  const clickEvent = () => {
    closeBottomMenu();
    onclick && onclick();
  };
  return (
    <StyledItem onClick={clickEvent} type={type} {...rest} background={program.background}>
      <Icon type={type} src={program.icon}></Icon>
      {type !== "bottom" ? (
        <Paragraph
          text={program.text}
          color={"black"}
          margin={"0 10px 10px 10px"}
          fontSize={"0.9rem"}
          fontWeight={"bold"}
        />
      ) : (
        ""
      )}
    </StyledItem>
  );
}

export default Item;
