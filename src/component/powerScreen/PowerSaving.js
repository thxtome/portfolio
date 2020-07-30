import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import ClockLoader from "react-spinners/ClockLoader";

const StyledPowerSaving = styled.div`
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

function PowerSaving({ unmountPowerScreen }) {
  const savingReferenece = useRef();
  const [isSavingMode, setIsSavingMode] = useState(false);

  useEffect(() => {
    let key = setTimeout(() => {
      setIsSavingMode(true);
      savingReferenece.current.addEventListener("click", () => {
        unmountPowerScreen();
      });
    }, 1000);
    return () => {
      clearTimeout(key);
    };
  }, []);

  return (
    <StyledPowerSaving ref={savingReferenece}>
      {isSavingMode ? "" : <Paragraph fontSize={"5rem"} width={"100%"} text={"절전중..."}></Paragraph>}
      {isSavingMode ? "" : <ClockLoader size={150} color={"gray"} loading={true} />}
    </StyledPowerSaving>
  );
}

export default PowerSaving;
