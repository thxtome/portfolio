import React from "react";
import styled from "styled-components";

const StyledCalendarBtn = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c4c4c4;
  &:hover {
    background: #ddd;
  }
`;
const StyledDateTime = styled.p`
  text-align: center;
`;

function CalendarBtn({ onclick, dateTime }) {
  return (
    <StyledCalendarBtn onClick={onclick}>
      <StyledDateTime>{dateTime}</StyledDateTime>
    </StyledCalendarBtn>
  );
}

export default CalendarBtn;
