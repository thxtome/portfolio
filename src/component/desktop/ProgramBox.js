import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Icon from "../common/Icon";
import _ from "lodash";

const StyledProgramBox = styled.div`
  position: absolute;
  width: max-content;
  height: max-content;
  min-width: 200px;
  min-height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #c4c4c4;
`;

const StyledProgramHeader = styled.header`
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

const StyledProgramTitle = styled.div`
  width: max-content;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 3px;
  background: #fff;
  flex-grow: 1;
`;

const StyledTabResizeTab = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  flex-wrap: nowrap;
  background: #c4c4c4;
  float: right;
  flex-basis: 0;
`;

function ProgramBox({ program, size, changeWindowLocation }) {
  const boxRef = useRef();
  useEffect(() => {
    if (
      size.height < program.location.top + boxRef.current.scrollHeight + 60 ||
      size.width < program.location.left + boxRef.current.scrollWidth
    ) {
      let nextTop =
        size.height < program.location.top + boxRef.current.scrollHeight + 60
          ? size.height - boxRef.current.scrollHeight - 60
          : program.location.top;

      let nextLeft =
        size.width < program.location.left + boxRef.current.scrollWidth
          ? size.width - boxRef.current.scrollWidth
          : program.location.left;

      changeWindowLocation({
        location: {
          top: nextTop,
          left: nextLeft,
        },
        target: program.type,
      });
    }
  }, [size]);

  let moveX = 0;
  let moveY = 0;

  const addDragEvt = (e) => {
    document.addEventListener("mouseup", mouseUpEvt);
    document.addEventListener("mousemove", mouseMoveEvt);
  };

  const mouseUpEvt = () => {
    document.removeEventListener("mouseup", mouseUpEvt);
    document.removeEventListener("mousemove", mouseMoveEvt);
  };

  const mouseMoveEvt = (e) => {
    let topMax = window.innerHeight - boxRef.current.scrollHeight - 60;
    let leftMax = window.innerWidth - boxRef.current.scrollWidth;
    moveY += e.movementY;
    moveX += e.movementX;
    let nextTop = program.location.top + moveY;
    let nextLeft = program.location.left + moveX;
    nextTop = nextTop < 0 ? 0 : nextTop > topMax ? topMax : nextTop;
    nextLeft = nextLeft < 0 ? 0 : nextLeft > leftMax ? leftMax : nextLeft;
    let nextLocation = { top: nextTop, left: nextLeft };
    changeWindowLocation({ location: nextLocation, target: program.type });
  };

  return (
    <div style={{ position: "absolute", top: program.location.top, left: program.location.left }} ref={boxRef}>
      <StyledProgramBox>
        <StyledProgramHeader
          onMouseDown={(e) => {
            addDragEvt(e);
          }}
        >
          <StyledProgramTitle>
            <Icon src={program.icon}></Icon>
            <Paragraph text={program.text} margin={"0 0 0 10px"} color={"black"}></Paragraph>
          </StyledProgramTitle>

          <StyledTabResizeTab>
            <Button text={"ㅡ"}></Button>
            <Button text={"ㅁ"}></Button>
            <Button text={"X"}></Button>
          </StyledTabResizeTab>
        </StyledProgramHeader>
        <StyledProgramContent></StyledProgramContent>
      </StyledProgramBox>
    </div>
  );
}

export default ProgramBox;
