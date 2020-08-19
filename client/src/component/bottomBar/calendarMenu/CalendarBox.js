import React, { useState } from "react";
import styled from "styled-components";
import CalendarTitle from "./CalendarTitle";
import CalendarContent from "./CalendarContent";

const StyledTimeBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 2.5rem;
  background: #c4c4c4;
`;

const calMonth = (year, month) => {
  let nextYear = year;
  let nextMonth = month;
  if (month === 0) {
    nextYear = year - 1;
    nextMonth = 12;
  } else if (month === 13) {
    nextYear = year + 1;
    nextMonth = 1;
  }
  return { nextYear, nextMonth };
};

function CalendarBox({ year, month, day }) {
  const [stYear, setStYear] = useState(year);
  const [stMonth, setStMonth] = useState(month);

  const movePrevMonth = () => {
    const { nextYear, nextMonth } = calMonth(stYear, stMonth - 1);
    setStYear(nextYear);
    setStMonth(nextMonth);
  };

  const moveNextMonth = () => {
    const { nextYear, nextMonth } = calMonth(stYear, stMonth + 1);
    setStYear(nextYear);
    setStMonth(nextMonth);
  };

  const yearAndMonth = { stYear, stMonth, movePrevMonth, moveNextMonth };

  return (
    <StyledTimeBox>
      <CalendarTitle {...yearAndMonth}></CalendarTitle>
      <CalendarContent
        day={day}
        stYear={stYear}
        stMonth={stMonth}
        isCurrentYandM={year === stYear && month === stMonth}
      ></CalendarContent>
    </StyledTimeBox>
  );
}

export default CalendarBox;
