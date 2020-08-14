import React from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";

const StyledSkillCard = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 10px;
`;

const StyledSkillsImg = styled.img`
  min-width: 50px;
  min-height: 50px;
  box-sizing: border-box;
  margin-right: 10px;
`;

const StyledSkillsTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 160px;
`;

const SkillCard = ({ icon, title, text }) => {
  return (
    <StyledSkillCard>
      <StyledSkillsImg src={icon} />
      <StyledSkillsTextBox>
        <Paragraph
          text={title}
          fontSize={"0.8rem"}
          fontWeight={"bold"}
          color={"black"}
          width={"100%"}
          textAlign={"start"}
        ></Paragraph>
        <Paragraph text={text} fontSize={"0.7rem"} textAlign={"start"} color={"black"}></Paragraph>
      </StyledSkillsTextBox>
    </StyledSkillCard>
  );
};

export default SkillCard;
