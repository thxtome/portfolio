import React from "react";
import styled from "styled-components";
import Paragraph from "../../../component/common/Paragraph";
import Button from "../../../component/common/Button";

const StyledCalendarTitle = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 10px;
  font-size: 2.5rem;
  align-items: center;
  background: #c4c4c4;
`;

const StyledButtonGroup = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  background: #c4c4c4;
`;

function CalendarBox({ stYear, stMonth, day, movePrevMonth, moveNextMonth }) {
  return (
    <StyledCalendarTitle>
      <Paragraph color={"black"} fontSize={"1.0rem"} text={`${stYear}년 ${stMonth}월`}></Paragraph>
      <StyledButtonGroup>
        <Button transform={"scaleX(1.5)"} color={"black"} text={`\u22C0`} onclick={movePrevMonth}></Button>
        <Button transform={"scaleX(1.5)"} color={"black"} text={`\u22C1`} onclick={moveNextMonth}></Button>
      </StyledButtonGroup>
    </StyledCalendarTitle>
  );
}

export default CalendarBox;
