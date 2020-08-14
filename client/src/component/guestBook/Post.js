import React, { useRef } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";

const StyledCard = styled.div`
  width: 100%;
  min-width: 270px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 5px 10px 5px 10px;
  margin: 10px 0 10px 0;
  border: 1px solid #999;
`;

const StyledTextBox = styled.div`
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledText = styled.div`
  width: 100%;
  height: max-content;
  min-height: 30px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledImgBox = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: #999;
`;

const StyledImg = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: #999;
`;

const GuestBook = ({ isMobileView }) => {
  return (
    <StyledCard>
      <StyledTextBox>
        <StyledText>
          <Paragraph
            text={"zks93"}
            color={"black"}
            textAlign={"start"}
            fontSize={"0.8rem"}
            fontWeight={"bold"}
          ></Paragraph>
        </StyledText>
        <StyledText>
          <Paragraph
            text={"여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다."}
            color={"black"}
            textAlign={"start"}
            fontSize={"0.9rem"}
            width={"calc(100% - 10px)"}
          ></Paragraph>
        </StyledText>
        <StyledText>
          <Paragraph text={"2020-08-13 18:03"} color={"#555"} textAlign={"start"} fontSize={"0.8rem"}></Paragraph>
        </StyledText>
      </StyledTextBox>
      <StyledImgBox>
        <StyledImg></StyledImg>
      </StyledImgBox>
    </StyledCard>
  );
};

export default GuestBook;
