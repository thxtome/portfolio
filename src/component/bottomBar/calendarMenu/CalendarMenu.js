import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CalendarBtn from "./CalendarBtn";
import TimeBox from "./TimeBox";
import CalendarBox from "./CalendarBox";
const StyledCalendarMenu = styled.div`
  position: absolute;
  bottom: 60px;
  right: 0px;
  width: 300px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background: #c4c4c4;
  transition: 1s;
`;

//현재 시각을 포맷에 맞게 변환
const dateTimeFormat = () => {
  const dt = new Date();
  const date = `${dt.getFullYear().toString().padStart(4, "0")}-${(dt.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${dt.getDate().toString().padStart(2, "0")}`;

  let hour = dt.getHours().toString().padStart(2, "0");

  let meridiem = "오전";
  if (hour > 12) {
    meridiem = "오후";
    hour = hour - 12;
  }

  const time = `${meridiem} ${hour}:${dt.getMinutes().toString().padStart(2, "0")}`;
  const second = dt.getSeconds().toString().padStart(2, "0");
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[dt.getDay()];
  return { date, time, second, dayOfWeek };
};

function CalendarMenu({ isCalendarMenuOpend, openCalendarMenu, closeCalendarMenu, toggleCalendarMenu }) {
  const [minute, setMinute] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [datestamp, setDatestamp] = useState(null);
  const [calendarContent, setCalendarContent] = useState(null);

  useEffect(() => {
    let { date } = dateTimeFormat();
    let dates = date.split("-");
    let [year, month, day] = dates;
    year = Number(year);
    month = Number(month);
    day = Number(day);
    setCalendarContent({ year, month, day });
  }, []);

  //분이 바뀔 때 마다 렌더
  useEffect(() => {
    let { date, time, second, dayOfWeek } = dateTimeFormat();
    let dates = date.split("-");
    let currentMinute = Number(time.substr(6, 2));
    let nextMinute = currentMinute === 59 ? 0 : currentMinute + 1;

    setDateTime(`${time}\n${date}`);
    setDatestamp(`${dates[0]}년 ${dates[1]}월 ${dates[2]}일 ${dayOfWeek}요일`);
    setTimeout(() => {
      setMinute(nextMinute);
    }, 60000 - second * 1000);
  }, [minute]);

  return (
    <>
      {isCalendarMenuOpend ? (
        <StyledCalendarMenu>
          <TimeBox dateTimeFormat={dateTimeFormat} datestamp={datestamp}></TimeBox>
          <CalendarBox {...calendarContent}></CalendarBox>
        </StyledCalendarMenu>
      ) : (
        ""
      )}
      <CalendarBtn onclick={toggleCalendarMenu} dateTime={dateTime}></CalendarBtn>
    </>
  );
}

export default CalendarMenu;
