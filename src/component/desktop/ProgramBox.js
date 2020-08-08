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

const ProgramBox = ({
  program: { type, icon, text, isMinimized, isMaximized, size, location, zIndex, Content },
  windowSize,
  changeWindowLocation,
  minimizeWindow,
  changeWindowSize,
  maximizeWindow,
  releaseMaximizeWindow,
  closeProgram,
  focusOnWindow,
}) => {
  const boxRef = useRef();
  const [resizeMode, setResizeMode] = useState("default");
  const isMobile = size.width < 764;

  const changeLocationWhenWindowResize = () => {
    if (
      windowSize.height < location.top + boxRef.current.scrollHeight + 60 ||
      windowSize.width < location.left + boxRef.current.scrollWidth
    ) {
      let restTop = windowSize.height - boxRef.current.scrollHeight - 60;
      let nextTop = restTop < 0 ? 0 : restTop < location.top ? restTop : location.top;

      let restLeft = windowSize.width - boxRef.current.scrollWidth;
      let nextLeft = restLeft < 0 ? 0 : restLeft < location.left ? restLeft : location.left;

      changeWindowLocation({
        location: {
          top: nextTop,
          left: nextLeft,
        },
        target: type,
      });
    }
  };

  const changeSizeWhenWindowResize = () => {
    if (isMaximized) {
      changeWindowSize({
        size: {
          height: windowSize.height - 60,
          width: windowSize.width,
        },
        target: type,
      });
    }

    if (windowSize.height < size.height + 60 || windowSize.width < size.width) {
      let nextHeight = windowSize.height < size.height + 60 ? windowSize.height - 60 : size.height;
      let nextWidth = windowSize.width < size.width ? windowSize.width : size.width;
      changeWindowSize({
        size: {
          height: nextHeight,
          width: nextWidth,
        },
        target: type,
      });
    }
  };

  useEffect(() => {
    changeSizeWhenWindowResize();
    changeLocationWhenWindowResize();
  }, [windowSize]);

  useEffect(() => {
    if (isMaximized) {
      changeWindowSize({
        size: {
          height: windowSize.height - 60,
          width: windowSize.width,
        },
        target: type,
      });

      changeWindowLocation({
        location: {
          top: 0,
          left: 0,
        },
        target: type,
      });
    }
  }, [isMaximized, isMinimized]);

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
    let nextTop = location.top + moveY;
    let nextLeft = location.left + moveX;
    nextTop = nextTop < -5 ? -5 : nextTop > topMax ? topMax : nextTop;
    nextLeft = nextLeft < -5 ? -5 : nextLeft > leftMax ? leftMax : nextLeft;
    let nextLocation = { top: nextTop, left: nextLeft };
    changeWindowLocation({ location: nextLocation, target: type });
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

    switch (resizeMode) {
      case "ew-resize":
        tempMoveY = 0;
        tempMoveX *= -1;
        break;

      case "sw-resize":
        tempMoveX *= -1;
        break;

      case "e-resize":
        tempMoveY = 0;
        break;

      case "n-resize":
        tempMoveX = 0;
        tempMoveY *= -1;
        break;

      case "nw-resize":
        tempMoveY *= -1;
        tempMoveX *= -1;
        break;

      case "ne-resize":
        tempMoveY *= -1;
        break;

      case "ns-resize":
        tempMoveX = 0;
        break;

      //se-resize
      default:
        break;
    }

    moveY += tempMoveY;
    moveX += tempMoveX;

    let nextHeight =
      size.height + moveY < 30
        ? 30
        : size.height + moveY > windowSize.height - 60
        ? windowSize.height - 60
        : size.height + moveY;

    let nextWidth =
      size.width + moveX < 200 ? 200 : size.width + moveX > windowSize.width ? windowSize.width : size.width + moveX;

    changeWindowSize({
      size: {
        height: nextHeight,
        width: nextWidth,
      },
      target: type,
    });

    let top = location.top;
    let left = location.left;
    let minLeft = location.left + size.width - 200;
    let minHeight = location.top + size.height - 30;

    switch (resizeMode) {
      case "ew-resize":
      case "sw-resize":
        changeWindowLocation({
          location: {
            top,
            left: left - moveX < minLeft ? left - moveX : minLeft,
          },
          target: type,
        });
        break;

      case "n-resize":
        changeWindowLocation({
          location: {
            top: top - moveY < minHeight ? top - moveY : minHeight,
            left,
          },
          target: type,
        });
        break;

      case "nw-resize":
        changeWindowLocation({
          location: {
            top: top - moveY < minHeight ? top - moveY : minHeight,
            left: left - moveX < minLeft ? left - moveX : minLeft,
          },
          target: type,
        });
        break;

      case "ne-resize":
        changeWindowLocation({
          location: {
            top: top - moveY < minHeight ? top - moveY : minHeight,
            left,
          },
          target: type,
        });
        break;

      //se-resize
      default:
        break;
    }
  };

  const changeResizeMode = (e) => {
    let left = false;
    let right = false;
    let up = false;
    let down = false;
    let resizeType = null;

    let x = e.clientX - location.left;
    let y = e.clientY - location.top;
    if (x >= 0 && x < 5) {
      resizeType = "ew-resize";
      left = true;
    } else if (x > size.width + 5 && x < size.width + 10) {
      resizeType = "e-resize";
      right = true;
    }

    if (y >= 0 && y < 5) {
      resizeType = "n-resize";
      up = true;
    } else if (y > size.height + 5 && y < size.height + 10) {
      resizeType = "ns-resize";
      down = true;
    }

    if (left && up) {
      resizeType = "nw-resize";
    } else if (left && down) {
      resizeType = "sw-resize";
    } else if (right && up) {
      resizeType = "ne-resize";
    } else if (right && down) {
      resizeType = "se-resize";
    }

    setResizeMode(resizeType);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: location.top,
        left: location.left,
        width: size.width,
        height: size.height,
        minWidth: "200px",
        minHeight: "30px",
        border: isMaximized ? "none" : "5px solid rgba(0, 0, 0, 0)",
        display: isMinimized ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: resizeMode,
        transition: isMaximized ? "0.5s" : "none",
        zIndex: zIndex,
      }}
      ref={boxRef}
      onMouseEnter={(e) => {
        changeResizeMode(e);
      }}
      onMouseLeave={(e) => {
        setResizeMode("default");
      }}
      onMouseDown={() => {
        focusOnWindow({ target: type });
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
            onDoubleClick={() => {
              if (isMaximized) {
                releaseMaximizeWindow({ target: type });
              } else {
                maximizeWindow({ target: type });
              }
            }}
          >
            <Icon src={icon} width={15} height={15}></Icon>
            <Paragraph text={text} margin={"0 0 0 10px"} color={"black"}></Paragraph>
          </StyledProgramTitle>

          <StyledTabResizeTab>
            <Button
              text={"ㅡ"}
              color={"black"}
              hover={"#999"}
              onclick={() => {
                minimizeWindow({ target: type });
              }}
            ></Button>
            {isMaximized ? (
              <Button
                text={`\u29C9`}
                color={"black"}
                hover={"#999"}
                letterSpacing={"0.1px"}
                onclick={() => {
                  releaseMaximizeWindow({ target: type });
                }}
              ></Button>
            ) : (
              <Button
                text={`\u25FB`}
                color={"black"}
                hover={"#999"}
                onclick={() => {
                  maximizeWindow({ target: type });
                }}
              ></Button>
            )}

            <Button
              text={"X"}
              color={"black"}
              hover={"#fe2d2d"}
              onclick={() => {
                closeProgram({ target: type });
              }}
            ></Button>
          </StyledTabResizeTab>
        </StyledProgramHeader>
        <StyledProgramContent>
          <Content padding={isMaximized ? "none" : "30px;"} isMobile={isMobile}></Content>
        </StyledProgramContent>
      </StyledProgramBox>
    </div>
  );
};

export default ProgramBox;
