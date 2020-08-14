import React, { useRef } from "react";
import styled from "styled-components";
import Icon from "../common/Icon";
import Paragraph from "../common/Paragraph";

const StyledDesktopItem = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  grid-row: ${(props) => (props.row ? props.row : "")};
  grid-column: ${(props) => (props.col ? props.col : "")};
  &:hover {
    background: rgb(255 255 255 / 20%);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  &:focus {
    background: rgb(255 255 255 / 40%);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

function DesktopItem({ program, onclick, ondoubleclick, onkeydown }) {
  const currentTarget = useRef();
  return (
    <StyledDesktopItem
      onClick={onclick}
      onDoubleClick={ondoubleclick}
      onKeyDown={onkeydown}
      tabIndex={1}
      ref={currentTarget}
    >
      <Icon src={program.icon} width={60} height={60}></Icon>
      <Paragraph text={program.text} color={"white"} margin={"0 10px 0 10px"} fontSize={"1.0rem"} />
    </StyledDesktopItem>
  );
}

export default DesktopItem;
