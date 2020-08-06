import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import Icon from "../common/Icon";
import _ from "lodash";

const StyledProgramBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #fff;
  border: 1px solid black;
  cursor: ${(props) => props.resizeMode};
`;

const StyledProgramHeader = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 3px;
`;

const StyledProgramContent = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 3px;
  overflow: auto;
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
  padding-left: 5px;
`;

const StyledTabResizeTab = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  flex-wrap: nowrap;
  float: right;
  flex-basis: 0;
`;

function ProgramBox({
  program,
  size,
  changeWindowLocation,
  minimizeWindow,
  changeWindowSize,
  maximizeWindow,
  releaseMaximizeWindow,
  closeProgram,
  focusOnWindow,
}) {
  const boxRef = useRef();
  const [resizeMode, setResizeMode] = useState("default");
  const changeLocationWhenWindowResize = () => {
    if (
      size.height < program.location.top + boxRef.current.scrollHeight + 60 ||
      size.width < program.location.left + boxRef.current.scrollWidth
    ) {
      let restTop = size.height - boxRef.current.scrollHeight - 60;
      let nextTop = restTop < 0 ? 0 : restTop < program.location.top ? restTop : program.location.top;

      let restLeft = size.width - boxRef.current.scrollWidth;
      let nextLeft = restLeft < 0 ? 0 : restLeft < program.location.left ? restLeft : program.location.left;

      changeWindowLocation({
        location: {
          top: nextTop,
          left: nextLeft,
        },
        target: program.type,
      });
    }
  };

  const changeSizeWhenWindowResize = () => {
    if (program.isMaximized) {
      changeWindowSize({
        size: {
          height: size.height - 60,
          width: size.width,
        },
        target: program.type,
      });
    }

    if (size.height < program.size.height + 60 || size.width < program.size.width) {
      let nextHeight = size.height < program.size.height + 60 ? size.height - 60 : program.size.height;
      let nextWidth = size.width < program.size.width ? size.width : program.size.width;
      changeWindowSize({
        size: {
          height: nextHeight,
          width: nextWidth,
        },
        target: program.type,
      });
    }
  };

  useEffect(() => {
    changeSizeWhenWindowResize();
    changeLocationWhenWindowResize();
  }, [size]);

  useEffect(() => {
    if (program.isMaximized) {
      changeWindowSize({
        size: {
          height: size.height - 60,
          width: size.width,
        },
        target: program.type,
      });

      changeWindowLocation({
        location: {
          top: 0,
          left: 0,
        },
        target: program.type,
      });
    }
  }, [program.isMaximized, program.isMinimized]);

  let moveX = 0;
  let moveY = 0;

  const addDragEvt = (e) => {
    document.addEventListener("mouseup", removeDragEvt);
    document.addEventListener("mousemove", dragEvt);
  };

  const removeDragEvt = () => {
    document.removeEventListener("mouseup", removeDragEvt);
    document.removeEventListener("mousemove", dragEvt);
  };

  const dragEvt = (e) => {
    let topMax = window.innerHeight - boxRef.current.scrollHeight - 60;
    let leftMax = window.innerWidth - boxRef.current.scrollWidth;
    moveY += e.movementY;
    moveX += e.movementX;
    let nextTop = program.location.top + moveY;
    let nextLeft = program.location.left + moveX;
    nextTop = nextTop < -5 ? -5 : nextTop > topMax ? topMax : nextTop;
    nextLeft = nextLeft < -5 ? -5 : nextLeft > leftMax ? leftMax : nextLeft;
    let nextLocation = { top: nextTop, left: nextLeft };
    changeWindowLocation({ location: nextLocation, target: program.type });
  };

  const addResizeEvt = (e) => {
    document.addEventListener("mousemove", resizeEvt);
    document.addEventListener("mouseup", removeResizeEvt);
  };

  const removeResizeEvt = () => {
    document.removeEventListener("mouseup", removeResizeEvt);
    document.removeEventListener("mousemove", resizeEvt);
  };

  const resizeEvt = (e) => {
    let tempMoveX = e.movementX;
    let tempMoveY = e.movementY;
    console.log(tempMoveX, tempMoveY);
    switch (resizeMode) {
      case "ew-resize":
        tempMoveY = 0;
        tempMoveX *= -1;
        break;
      case "e-resize":
        tempMoveY = 0;
        break;
      case "n-resize":
        tempMoveX = 0;
        tempMoveY *= -1;
        break;
      case "ns-resize":
        tempMoveX = 0;
        break;

      default:
        break;
    }
    console.log(tempMoveX, tempMoveY);

    moveY += tempMoveY;
    moveX += tempMoveX;

    let nextHeight =
      program.size.height + moveY < 30
        ? 30
        : program.size.height + moveY > size.height - 60
        ? size.height - 60
        : program.size.height + moveY;

    let nextWidth =
      program.size.width + moveX < 200
        ? 200
        : program.size.width + moveX > size.width
        ? size.width
        : program.size.width + moveX;

    changeWindowSize({
      size: {
        height: nextHeight,
        width: nextWidth,
      },
      target: program.type,
    });

    switch (resizeMode) {
      case "ew-resize":
        changeWindowLocation({
          location: {
            top: program.location.top,
            left: program.location.left - moveX,
          },
          target: program.type,
        });

        break;
      case "n-resize":
        changeWindowLocation({
          location: {
            top: program.location.top - moveY,
            left: program.location.left,
          },
          target: program.type,
        });

        break;

      default:
        break;
    }
  };

  const changeResizeMode = (e) => {
    let x = e.clientX - program.location.left;
    let y = e.clientY - program.location.top;
    if (x >= 0 && x < 5) {
      setResizeMode("ew-resize");
    } else if (x > program.size.width + 5 && x < program.size.width + 10) {
      setResizeMode("e-resize");
    } else if (y >= 0 && y < 5) {
      setResizeMode("n-resize");
    } else if (y > program.size.height + 5 && y < program.size.height + 10) {
      setResizeMode("ns-resize");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: program.location.top,
        left: program.location.left,
        width: program.size.width,
        height: program.size.height,
        minWidth: "200px",
        minHeight: "30px",
        border: program.isMaximized ? "none" : "5px solid rgba(0, 0, 0, 0)",
        display: program.isMinimized ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: resizeMode,
        transition: program.isMaximized ? "0.5s" : "none",
        zIndex: program.zIndex,
      }}
      ref={boxRef}
      onMouseEnter={(e) => {
        changeResizeMode(e);
      }}
      onMouseLeave={(e) => {
        setResizeMode("default");
      }}
      onMouseDown={() => {
        focusOnWindow({ target: program.type });
        if (resizeMode === "default") {
          return;
        }
        addResizeEvt();
      }}
    >
      <StyledProgramBox
        onMouseEnter={(e) => {
          setResizeMode("default");
        }}
        onMouseLeave={(e) => {
          changeResizeMode(e);
        }}
      >
        <StyledProgramHeader>
          <StyledProgramTitle
            onMouseDown={(e) => {
              addDragEvt(e);
            }}
          >
            <Icon src={program.icon}></Icon>
            <Paragraph text={program.text} margin={"0 0 0 10px"} color={"black"}></Paragraph>
          </StyledProgramTitle>

          <StyledTabResizeTab>
            <Button
              text={"ㅡ"}
              color={"black"}
              hover={"#999"}
              onclick={() => {
                minimizeWindow({ target: program.type });
              }}
            ></Button>
            {program.isMaximized ? (
              <Button
                text={`\u29C9`}
                color={"black"}
                hover={"#999"}
                letterSpacing={"0.1px"}
                onclick={() => {
                  releaseMaximizeWindow({ target: program.type });
                }}
              ></Button>
            ) : (
              <Button
                text={`\u25FB`}
                color={"black"}
                hover={"#999"}
                onclick={() => {
                  maximizeWindow({ target: program.type });
                }}
              ></Button>
            )}

            <Button
              text={"X"}
              color={"black"}
              hover={"#fe2d2d"}
              onclick={() => {
                closeProgram({ target: program.type });
              }}
            ></Button>
          </StyledTabResizeTab>
        </StyledProgramHeader>
        <StyledProgramContent>
          <program.content padding={program.isMaximized ? "none" : "30px;"}></program.content>
        </StyledProgramContent>
      </StyledProgramBox>
    </div>
  );
}

export default ProgramBox;
