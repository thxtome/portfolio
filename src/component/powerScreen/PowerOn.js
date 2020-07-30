import React, { useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import ClockLoader from "react-spinners/ClockLoader";

const StyledPowerOn = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1000000;
`;

function PowerOn({ unmountPowerScreen }) {
  useEffect(() => {
    let key = setTimeout(() => {
      unmountPowerScreen();
    }, 2000);
    return () => {
      clearTimeout(key);
    };
  }, []);
  return (
    <StyledPowerOn>
      <Paragraph fontSize={"5rem"} width={"100%"}>
        사용자 화면 구성중
      </Paragraph>
      <ClockLoader size={150} color={"gray"} loading={true} />
    </StyledPowerOn>
  );
}

export default PowerOn;
