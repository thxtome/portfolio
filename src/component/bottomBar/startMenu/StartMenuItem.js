import React from "react";
import styled from "styled-components";
import BottomIcon from "./BottomIcon";

const StyledStartMenuItem = styled.div`
  width: 108px;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c4c4c4;
  &:hover {
    background: #ddd;
  }
`;

function StartMenuItem({ icon, closeBottomMenu, onclick }) {
  const clickEvent = () => {
    closeBottomMenu();
    onclick && onclick();
  };
  return (
    <StyledStartMenuItem onClick={clickEvent}>
      <BottomIcon src={icon}></BottomIcon>
    </StyledStartMenuItem>
  );
}

export default StartMenuItem;
