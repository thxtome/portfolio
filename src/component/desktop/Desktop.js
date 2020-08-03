import React, { useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import Activation from "./Activation";
import BottomItemContainer from "../../container/bottomBar/BottomItemContainer";
import ProgramBox from "./ProgramBox";

const StyledDesktop = styled.main`
width: 100%;
height: ${(props) => (props.size ? `${props.size.height - 60}px` : "100%")};
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
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Desktop({ programs, changeWindowLocation }) {
  const size = useWindowSize();
  return (
    <StyledDesktop size={size}>
      {programs.map((program, index) => (
        <ProgramBox size={size} program={program} changeWindowLocation={changeWindowLocation} key={index}></ProgramBox>
      ))}
      {programs.map((program, index) => (
        <BottomItemContainer program={program} type={"desktop"} key={index} />
      ))}
      <Activation></Activation>
    </StyledDesktop>
  );
}

export default Desktop;
