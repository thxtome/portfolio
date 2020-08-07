import React from "react";
import styled from "styled-components";
import StartMenuContainer from "../../container/bottomBar/startMenu/StartMenuContainer";
import CalendarMenuContainer from "../../container/bottomBar/calendarMenu/CalendarMenuContainer";
import BottomBarItem from "./BottomBarItem";

const StyledBottomBar = styled.footer`
  position: fixed;
  width: 100%;
  height: 60px;
  background: #c4c4c4;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  min-width: 450px;
  z-index: 1000000;
`;

const StyledBottomIconBox = styled.div`
  width: max-content;
  height: 60px;
  display: grid;
  grid-template: 60px / repeat(auto-fill, 60px);
  min-width: 360px;
`;

const StyledBottomCalendarBox = styled.div`
  min-width: 90px;
  height: 60px;
  display: flex;
`;

function BottomBar({ programs, closeBottomMenu, openWindow }) {
  return (
    <StyledBottomBar>
      <StyledBottomIconBox>
        <StartMenuContainer programs={programs}></StartMenuContainer>
        {programs.map((program, index) => (
          <BottomBarItem
            program={program}
            onclick={() => {
              closeBottomMenu();
              openWindow({ target: program.type });
            }}
            key={index}
          />
        ))}
      </StyledBottomIconBox>
      <StyledBottomCalendarBox>
        <CalendarMenuContainer></CalendarMenuContainer>
      </StyledBottomCalendarBox>
    </StyledBottomBar>
  );
}

export default BottomBar;
