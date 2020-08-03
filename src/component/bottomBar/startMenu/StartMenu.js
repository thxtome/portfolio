import React from "react";
import styled from "styled-components";
import StartMenuBtn from "./StartMenuBtn";
import sidePower from "../../../svg/sidePower.svg";
import ItemContainer from "../../../container/common/ItemContainer";
import Paragraph from "../../common/Paragraph";

const StyledStartMenu = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0px;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #c4c4c4;
`;

const StyledSideMenu = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StyledStartMenuContent = styled.div`
  width: 240px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StyledContentTitle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledContentIconBox = styled.div`
  width: 100%;
  height: 360px;
  box-sizing: border-box;
  padding: 10px 15px 10px 0;
  display: grid;
  grid-gap: 10px;
  grid-template: repeat(2, 108px) / repeat(2, 108px);
`;

function StartMenu({
  isStartMenuOpend,
  openStartMenu,
  closeStartMenu,
  toggleStartMenu,
  mountSelectPowerModal,
  programs,
}) {
  return (
    <>
      {isStartMenuOpend ? (
        <StyledStartMenu>
          <StyledSideMenu>
            <ItemContainer
              program={{ icon: sidePower }}
              onclick={mountSelectPowerModal}
              type={"bottom"}
            ></ItemContainer>
          </StyledSideMenu>
          <StyledStartMenuContent>
            <StyledContentTitle>
              <Paragraph text={"최근에 사용한 앱"} fontSize={"0.9rem"} color={"black"}></Paragraph>
            </StyledContentTitle>
            <StyledContentIconBox>
              {programs.map((program, index) => (
                <ItemContainer program={program} type={"start"} key={index} />
              ))}
            </StyledContentIconBox>
          </StyledStartMenuContent>
        </StyledStartMenu>
      ) : (
        ""
      )}
      <StartMenuBtn onclick={toggleStartMenu}></StartMenuBtn>
    </>
  );
}

export default StartMenu;
