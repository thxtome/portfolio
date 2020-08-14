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
  "건설기계회사의 ERP입니다.",
  "회사의 매출, 매입 관리부터 회계관리와 근태관리까지 통합하여 관리하면 좋겠다는 생각에 시작했습니다. ",
  null,
  "백엔드는 Spring boot를 사용했고 프론트는 JSP를 사용했습니다.",
  "프론트엔드와 백엔드 모두 혼자 작업했습니다.",
  null,
  "필요한 회계항목을 입력하고 차변과 대변을 한번에 입력할 수 있게 ",
  "만든 단축전표가 핵심 항목입니다.",
  "현재 회사에서 사용중인 관계로 시연 영상만 올리도록 하겠습니다.",
];

const Egaccount = ({ isMobileView }) => {
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
            console.log(text);
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
            <Button
              text={"github"}
              width={"100px"}
              height={"40px"}
              background={"#363d44"}
              borderRadius={"5px"}
              hover={"#000"}
              onclick={() => {
                window.open("https://github.com/thxtome/BitCampFirtstTeam");
              }}
            ></Button>
          </StyledButtonGroup>
        </StyledArticleContentBox>
      </StyledArticle>
    </StyledContentSection>
  );
};

export default Egaccount;
