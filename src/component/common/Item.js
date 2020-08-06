import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Paragraph from "./Paragraph";

const StyledItem = styled.div`
  width: ${(props) => (props.type === "bottom" ? "60px" : props.type === "start" ? "108px" : "120px")};
  height: ${(props) => (props.type === "bottom" ? "60px" : props.type === "start" ? "108px" : "120px")};
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.type === "start" ? "flex-end" : "flex-start")};
  background: ${(props) => (props.type === "start" ? props.background : "none")};
  margin-top: ${(props) => (props.type === "start" ? "0" : "5px")};
  &:hover {
    background: #ddd;
  }
  flex-wrap: wrap;
`;
const StyledItemOpenBar = styled.div`
  width: 80%;
  height: 5px;
  background: #2b7cff;
`;

function Item({ program, closeBottomMenu, onclick, type, openProgram, ...rest }) {
  const clickEvent = () => {
    program.type && openProgram({ target: program.type, isOpen: true });
    closeBottomMenu();
    onclick && onclick();
  };
  return (
    <StyledItem onClick={clickEvent} type={type} {...rest} background={program.background}>
      <Icon type={type} src={program.icon}></Icon>
      {type !== "bottom" ? (
        <Paragraph
          text={program.text}
          color={type === "start" ? "black" : "white"}
          margin={"0 10px 10px 10px"}
          fontSize={"0.9rem"}
          fontWeight={"bold"}
        />
      ) : program.isOpen ? (
        <StyledItemOpenBar />
      ) : (
        ""
      )}
    </StyledItem>
  );
}

export default Item;
