import React from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import Face from "../../svg/face.svg";

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
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 240px;
`;

const StyledProfileCard = styled.div`
  width: ${(props) => (props.isMobileView ? "240px" : "320px")};
  height: ${(props) => (props.isMobileView ? "150px" : "180px")};
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-self: center;
  flex-wrap: nowrap;
  background: #26272b;
  margin: auto;
  margin-bottom: 10px;
`;

const StyledProfileCardImg = styled.img`
  width: ${(props) => (props.isMobileView ? "80px" : "120px")};
  height: ${(props) => (props.isMobileView ? "80px" : "120px")};
  justify-content: flex-start;
  align-self: center;
  background: #999;
  position: relative;
  left: -20px;
  border-radius: 5px;
`;

const StyledProfileCardTextBox = styled.div`
  width: max-content;
  justify-content: flex-start;
  align-self: center;
  position: relative;
  left: ${(props) => (props.isMobileView ? "-10px" : "0px")};
`;

const WhoAmI = ({ isMobileView, refs }) => {
  let introduce = [
    "평범한 직장에서 엑셀  매크로를 만들다 개발의 매력에 푹 빠졌습니다.",
    "6개월의 단기 국비 자바과정을 통해 개발에 입문했고, ",
    "현재는 프론트엔드, 백엔드 모두 관심을 두고 있습니다.",
    "밤새 이것 저것 배우고 만져보는 걸 좋아하고 ",
    "배운것으로 무언가 만드는 건 더 좋아합니다.",
    "유쾌하고 깔끔한 성격이고 코드 역시 이런 성향을 추구합니다.",
    "주변에서 많이 배우고 또 배운 것을 나눠주는 사람이 되려고 노력합니다.",
    "와주신 분들도 제 주변인이 되어주셨으면 합니다. 감사합니다.",
  ];

  let profileText = ["신입개발자", "Park Jong Hoon", "tel. 010 -7673-7941", "mail. thxtome531@gmail.com"];
  return (
    <StyledContentSection isMobileView={isMobileView} ref={refs}>
      <StyledSectionTitle>
        <Paragraph text={"WHO AM I"} color={"black"} fontSize={"1.6rem"}></Paragraph>
        <StyledHr />
      </StyledSectionTitle>
      <StyledArticle isMobileView={isMobileView}>
        <StyledArticleContentBox width={"50%;"}>
          <StyledProfileCard isMobileView={isMobileView}>
            <StyledProfileCardImg
              isMobileView={isMobileView}
              src={Face}
              onLoad={() => {
                console.log("load");
              }}
            ></StyledProfileCardImg>
            <StyledProfileCardTextBox>
              {profileText.map((text, index) => {
                return (
                  <Paragraph
                    text={text}
                    color={"White"}
                    fontSize={isMobileView ? "0.7rem" : "0.9rem"}
                    margin={"0 0 10px 0"}
                    textAlign={"start"}
                    key={index}
                  ></Paragraph>
                );
              })}
            </StyledProfileCardTextBox>
          </StyledProfileCard>
        </StyledArticleContentBox>
        <StyledArticleContentBox width={"50%;"}>
          {introduce.map((text, index) => {
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
        </StyledArticleContentBox>
      </StyledArticle>
    </StyledContentSection>
  );
};

export default WhoAmI;
