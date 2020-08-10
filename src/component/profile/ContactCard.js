import React from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";

const StyledContactCard = styled.div`
  max-width: 340px;
  min-width: 240px;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  align-items: flex-start;
  padding: 10px;
  background: #26272b;
  margin: 0 0 20px 10px;
  border-radius: 5px;
`;

const StyledContactsImg = styled.img`
  min-width: 60px;
  min-height: 60px;
  box-sizing: border-box;
  margin: 0 20px 0 10px;
`;

const StyledContactsTextBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 140px;
  min-height: 60px;
  align-items: center;
`;

const StyledATag = styled.a`
  color: white;
  font-size: 0.8rem;
  overflow-wrap: break-word;
  height: max-content;
  text-align: start;
  width: 100%;
`;

const ContactCard = ({ icon, title, text }) => {
  return (
    <StyledContactCard>
      <StyledContactsImg src={icon} />
      <StyledContactsTextBox>
        <Paragraph text={title} color={"white"} width={"90%"} textAlign={"start"}></Paragraph>
        {title !== "Github" ? (
          <Paragraph text={text} color={"white"} width={"90%"} fontSize={"0.8rem"} textAlign={"start"}></Paragraph>
        ) : (
          <StyledATag href={text}>{text}</StyledATag>
        )}
      </StyledContactsTextBox>
    </StyledContactCard>
  );
};

export default ContactCard;
