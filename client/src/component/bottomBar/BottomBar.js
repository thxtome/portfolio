import React from 'react';
import styled from 'styled-components';
import StartMenuContainer from '../../container/bottomBar/startMenu/StartMenuContainer';
import CalendarMenuContainer from '../../container/bottomBar/calendarMenu/CalendarMenuContainer';
import BottomBarItem from './BottomBarItem';
import isMobile from '../../lib/MobileDetect';
import Button from '../common/Button';
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
  min-width: 300px;
  flex-grow: 1;
`;

const StyledBottomCalendarBox = styled.div`
  width: max-content;
  height: 60px;
  display: flex;
`;

const StyledBottomGoDesktopBox = styled.div`
  width: 12px;
  min-width: 12px;
  height: 60px;
  display: flex;
  cursor: pointer;
  border-left: 1px solid #999;
  &:hover {
    background: #999;
  }
`;

function BottomBar({ programs, closeBottomMenu, openWindow, goToDesktop }) {
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
      {isMobile ? (
        ''
      ) : (
        <StyledBottomCalendarBox>
          <CalendarMenuContainer></CalendarMenuContainer>
        </StyledBottomCalendarBox>
      )}
      <StyledBottomGoDesktopBox>
        <Button onclick={goToDesktop}></Button>
      </StyledBottomGoDesktopBox>
    </StyledBottomBar>
  );
}

export default BottomBar;
