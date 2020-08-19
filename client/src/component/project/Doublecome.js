import React from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";

import Doublecome from "../../svg/project/doublecome.svg";
import Egaccount from "../../svg/project/egaccount.svg";
import Momato from "../../svg/project/momato.svg";

const StyledContentSection = styled.section`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: ${(props) => (props.isMobileView ? "30px 10px 0 10px" : "10px 15px 30px 15px")};
`;

const StyledSectionTitle = styled.title`
  width: 100%;
  max-width: 1120px;
  font-family: "Do Hyeon";
  height: max-content;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const StyledHr = styled.hr`
  width: 70%;
  height: 1px;
  background: black;
  align-self: center;
`;

const StyledArticle = styled.article`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  padding: ${(props) => (props.isMobileView ? "15px 0 0 0" : "30px 5px 0 5px")};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const StyledArticleContentBox = styled.article`
  width: ${(props) => (props.width ? props.width : "50%")};
  height: max-content;
  display: ${(props) => (props.display ? props.display : "flex")};
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 240px;
`;

const StyledProjectImg = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  max-height: 300px;
`;

const StyledButtonGroup = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const doublecomeText = [
  "중고 물품을 어떻게 하면 더 비싸게 팔 수 있을까에서 ",
  "시작된  중고 경매 사이트입니다.",
  null,
  "웹개발은 Java Spring을 사용하였고,  방송은 Client서버는 NodeJs, ",
  "중계 서버는KurentoMediaServer와 coturn을 이용하여  직접 구성했습니다.",
  null,
  "초기 개발 설정과 페이징, 방송기능을 맡아서 작업했습니다. ",
];



const Doublecome = ({ isMobileView }) => {
  return (
    <StyledContentSection>
      <StyledSectionTitle>
        <Paragraph text={"DOUBLECOME"} color={"black"} fontSize={"1.6rem"}></Paragraph>
        <StyledHr />
      </StyledSectionTitle>
      <Paragraph
        text={"중고 경매 사이트 2019-09 ~ 2020-01"}
        color={"black"}
        fontSize={"1rem"}
        width={"100%"}
        textAlign={"start"}
      ></Paragraph>
      <StyledArticle isMobileView={isMobileView}>
        <StyledArticleContentBox width={"50%;"}>
          <StyledProjectImg src={Doublecome}></StyledProjectImg>
        </StyledArticleContentBox>
        <StyledArticleContentBox width={"50%;"} display={"block"}>
          {doublecomeText.map((text, index) => {
            if (text === null) {
              return <br />;
            }
            return (
              <Paragraph
                text={text}
                color={"black"}
                fontSize={isMobileView ? "0.8rem" : "1rem"}
                margin={"0 0 5px 0"}
                textAlign={"start"}
                key={index}
              ></Paragraph>
            );
          })}
          <StyledButtonGroup>
            <Button
              text={"youtube"}
              width={"100px"}
              height={"40px"}
              background={"red"}
              borderRadius={"5px"}
              hover={"#bb1919"}
              onclick={() => {
                window.open("https://www.youtube.com/watch?v=j1gPvZifyS0");
              }}
            ></Button>
          </StyledButtonGroup>
        </StyledArticleContentBox>
      </StyledArticle>
    </StyledContentSection>
  );
};

export default Doublecome;
