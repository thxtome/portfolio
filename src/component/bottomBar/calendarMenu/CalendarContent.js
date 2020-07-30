import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../../../component/common/Paragraph";
import DateBox from "./DateBox";

const StyledCalendarContent = styled.div`
  width: 300px;
  height: 250px;
  display: grid;
  grid-template: repeat(7, 1fr) / repeat(7, 1fr);
  grid-gap: 1px;
  background: #c4c4c4;
`;

const makeDateContent = (year, month, day, isCurrentYandM) => {
  console.log(isCurrentYandM, day);
  const dates = [];
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate() - 1;
  let prevMonthLastDate = new Date(year, month - 1, 0).getDate();

  //이달의 날짜를 채움
  for (let i = firstDay; i <= lastDate + firstDay; i++) {
    let dateInfo = { date: i - firstDay + 1, isCurrentMonth: true };
    if (isCurrentYandM && Number(day) == i - firstDay + 1) {
      dateInfo.isCurrentDay = true;
    }
    dates[i] = dateInfo;
  }

  //전달 채움
  for (let i = firstDay - 1; i >= 0; i--) {
    let dateInfo = { date: prevMonthLastDate--, isCurrentMonth: false };
    dates[i] = dateInfo;
  }

  //다음달 채움
  let date = 1;
  for (let i = lastDate + firstDay + 1; i < 42; i++) {
    let dateInfo = { date: date++, isCurrentMonth: false };
    dates[i] = dateInfo;
  }

  return dates;
};

const week = ["일", "월", "화", "수", "목", "금", "토"];

function CalendarContent({ stYear, stMonth, day, isCurrentYandM }) {
  const dates = makeDateContent(stYear, stMonth, day, isCurrentYandM);
  return (
    <StyledCalendarContent>
      {week.map((text, index) => {
        return <DateBox text={text} isCurrentMonth={true} key={index}></DateBox>;
      })}

      {dates.map((dateInfo, index) => {
        return (
          <DateBox
            text={dateInfo.date}
            isCurrentDay={dateInfo.isCurrentDay}
            isCurrentMonth={dateInfo.isCurrentMonth}
            key={index}
          ></DateBox>
        );
      })}
    </StyledCalendarContent>
  );
}

export default CalendarContent;
