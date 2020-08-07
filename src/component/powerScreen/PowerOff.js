import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import ClockLoader from "react-spinners/ClockLoader";
import power from "../../svg/power.svg";

const StyledPowerOff = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledTrunOnBtn = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
  &: active {
    opacity: 0.7;
  }
`;

function PowerOff({ changePowerState }) {
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsExit(true);
    }, 1000);
  }, []);

  return (
    <StyledPowerOff>
      {isExit ? "" : <Paragraph fontSize={"5rem"} width={"100%"} text={"종료중..."}></Paragraph>}
      {isExit ? (
        <StyledTrunOnBtn
          onClick={() => {
            changePowerState(1);
          }}
          src={power}
        ></StyledTrunOnBtn>
      ) : (
        <ClockLoader size={150} color={"gray"} loading={true} />
      )}
    </StyledPowerOff>
  );
}

export default PowerOff;
