import React, { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import Icon from "../common/Icon";

const StyledProgramBox = styled.div`
  position: absolute;
  width: max-content;
  height: max-content;
  min-width: 200px;
  min-height: 30px;
  top: ${(props) => (props.top ? `${props.top}px` : "")};
  left: ${(props) => (props.left ? `${props.left}px` : "")};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #c4c4c4;
`;

const StyledProgramTab = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 3px;
  background: #e4e4e4;
`;

const StyledProgramContent = styled.div`
  width: 100%;
  // height: max-content;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 3px;
  background: #c4c4c4;
`;

function ProgramBox({ program, setMouseLocation, setIsDragging }) {
  const tabRef = useRef();
  return (
    <div style={{ position: "absolute", top: program.location.top + "px", left: program.location.left + "px" }}>
      <StyledProgramBox>
        <StyledProgramTab
          onMouseDown={(e) => {
            setIsDragging(true);
            setMouseLocation({ top: e.clientY, left: e.clientX });
          }}
          onMouseUp={(e) => {
            setIsDragging(false);
          }}
        >
          <Icon src={program.icon}></Icon>
          <Paragraph text={program.text} margin={"0 0 0 10px"} color={"black"}></Paragraph>
        </StyledProgramTab>
        <StyledProgramContent></StyledProgramContent>
      </StyledProgramBox>
    </div>
  );
}

export default ProgramBox;
