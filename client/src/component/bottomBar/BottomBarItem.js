import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../common/Icon";

const StyledBottomBarItem = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #c4c4c4;
  &:hover {
    background: #ddd;
  }
`;

const StyledItemOpenBar = styled.div`
  position: fixed;
  width: ${(props) => (props.isHovered ? "60px" : "50px")};
  height: 4px;
  flex-wrap: wrap;
  align-self: flex-end;
  background: #3747ff;
  transition: 0.1s;
`;

function BottomBarItem({ program, onclick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledBottomBarItem
      onClick={onclick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Icon src={program.icon} width={40} height={40}></Icon>
      {program.isOpen ? <StyledItemOpenBar isHovered={isHovered}></StyledItemOpenBar> : ""}
    </StyledBottomBarItem>
  );
}

export default BottomBarItem;
