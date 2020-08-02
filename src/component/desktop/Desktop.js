import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import Activation from "./Activation";
import BottomItemContainer from "../../container/bottomBar/BottomItemContainer";
import ProgramBox from "./ProgramBox";

const StyledDesktop = styled.main`
width: 100%;
height: ${(props) => (props.height ? `${props.height - 60}px` : "100%")};
background: black;
display: grid;
grid-template: repeat(auto-fill, 120px) / repeat(auto-fill, 120px);
grid-gap: 3px;
padding 3px;
box-sizing: border-box;
`;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Desktop({ programs, changeWindowLocation }) {
  const [width, height] = useWindowSize();
  const [location, setLocation] = useState({ top: 3, left: 3 });
  const [mouseLocation, setMouseLocation] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <StyledDesktop
      width={width}
      height={height}
      onMouseMove={(e) => {
        if (isDragging) {
          if (e.clientY == 0 && e.clientX == 0) {
            return;
          }
          changeWindowLocation({
            location: {
              top: location.top + e.clientY - mouseLocation.top,
              left: location.left + e.clientX - mouseLocation.left,
            },
            target: "profile",
          });
          setLocation({
            top: location.top + e.clientY - mouseLocation.top,
            left: location.left + e.clientX - mouseLocation.left,
          });
          setMouseLocation({ top: e.clientY, left: e.clientX });
        }
      }}
    >
      <ProgramBox
        program={programs[0]}
        setMouseLocation={setMouseLocation}
        setIsDragging={setIsDragging}
        location={location}
      ></ProgramBox>
      {programs.map((program, index) => (
        <BottomItemContainer program={program} type={"desktop"} key={index} />
      ))}
      <Activation></Activation>
    </StyledDesktop>
  );
}

export default Desktop;
