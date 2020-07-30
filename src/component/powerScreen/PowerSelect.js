import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SelectModal from "./SelectModal";

const StyledPowerSelect = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1000000;
`;

function PowerSelect({ changePowerState, unmountPowerScreen }) {
  return (
    <StyledPowerSelect>
      <SelectModal changePowerState={changePowerState} unmountPowerScreen={unmountPowerScreen}></SelectModal>
    </StyledPowerSelect>
  );
}

export default PowerSelect;
