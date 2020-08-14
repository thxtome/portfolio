import React from "react";
import styled from "styled-components";

const StyledDateBox = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  text-align: center;
  line-height: 34px;
  box-sizing: border-box;
`;

function DateBox({ text, isCurrentDay, isCurrentMonth }) {
  return (
    <StyledDateBox
      style={{
        color: isCurrentDay ? "white" : isCurrentMonth ? "black" : "#999",
        background: isCurrentDay ? "#0061ff" : "none",
        outline: isCurrentDay ? "2px solid rgb(0, 97, 255)" : "0",
        border: isCurrentDay ? "2px solid white" : "0",
      }}
    >
      {text}
    </StyledDateBox>
  );
}

export default DateBox;
