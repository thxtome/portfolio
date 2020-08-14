import React, { useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import Activation from "./Activation";
import DesktopItem from "./DesktopItem";
import ProgramBox from "./ProgramBox";

const StyledDesktop = styled.main`
width: 100%;
height: ${(props) => (props.windowSize ? `${props.windowSize.height - 60}px` : "100%")};
background: black;
display: grid;
grid-template: repeat(auto-fill, 120px) / repeat(auto-fill, 120px);
grid-gap: 3px;
padding 3px;
box-sizing: border-box;
`;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return windowSize;
};

function Desktop({
  programs,
  changeWindowLocation,
  minimizeWindow,
  changeWindowSize,
  maximizeWindow,
  releaseMaximizeWindow,
  closeProgram,
  focusOnWindow,
  closeBottomMenu,
  openWindow,
}) {
  const windowSize = useWindowSize();
  return (
    <StyledDesktop windowSize={windowSize} onClick={closeBottomMenu}>
      {programs.map((program, index) => {
        if (program.isOpen) {
          return (
            <ProgramBox
              windowSize={windowSize}
              program={program}
              changeWindowLocation={changeWindowLocation}
              minimizeWindow={minimizeWindow}
              changeWindowSize={changeWindowSize}
              maximizeWindow={maximizeWindow}
              releaseMaximizeWindow={releaseMaximizeWindow}
              closeProgram={closeProgram}
              focusOnWindow={focusOnWindow}
              key={index}
            ></ProgramBox>
          );
        }
      })}
      {programs.map((program, index) => (
        <DesktopItem
          program={program}
          onclick={closeBottomMenu}
          ondoubleclick={() => {
            openWindow({ target: program.type });
          }}
          onkeydown={(e) => {
            if (e.keyCode == 13) {
              openWindow({ target: program.type });
            }
          }}
          key={index}
        />
      ))}
      <Activation></Activation>
    </StyledDesktop>
  );
}

export default Desktop;
