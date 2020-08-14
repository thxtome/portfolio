import React from "react";
import styled from "styled-components";
import Icon from "../../common/Icon";
import Paragraph from "../../common/Paragraph";

const StyledStartMenuItem = styled.div`
  width: 108px;
  height: 108px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background: ${(props) => (props.background ? props.background : "#c4c4c4")};
  &:hover {
    background: #ddd;
  }
`;

function StartMenuItem({ program, onclick }) {
  return (
    <StyledStartMenuItem onClick={onclick} background={program.background}>
      <Icon src={program.icon} width={40} height={40}></Icon>
      <Paragraph text={program.text} color={"black"} margin={"0 10px 0 10px"} fontSize={"0.9rem"} fontWeight={"bold"} />
    </StyledStartMenuItem>
  );
}

export default StartMenuItem;
