import React from "react";
import styled from "styled-components";
import startMenuIcon from "../../../svg/menu.svg";
import Icon from "../../common/Icon";

const StyledStartMenuBtn = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c4c4c4;
  &:hover {
    background: #ddd;
  }
`;

function StartMenuBtn({ onclick }) {
  return (
    <StyledStartMenuBtn onClick={onclick}>
      <Icon src={startMenuIcon} type={"bottom"}></Icon>
    </StyledStartMenuBtn>
  );
}

export default StartMenuBtn;
