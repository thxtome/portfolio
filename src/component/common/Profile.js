import React, { useState } from "react";
import styled from "styled-components";
import ContentFooter from "./ContentFooter";
import ContentHeader from "./ContentHeader";
import Paragraph from "./Paragraph";

const StyledProfile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background: #eaeaea;
`;
const StyledProfileContent = styled.div`
  width: 90%;
  max-width: 1120px;
  height: max-content%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: -50px;
  background: #fff;
`;

const StyledContentSection = styled.section`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: ${(props) => (props.isMobile ? "30px 0 0 10px" : "30px 0 0 30px")};
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

const StyledArticle = styled.article`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  padding: ${(props) => (props.isMobile ? "30px 0 0 10px" : "30px 0 0 30px")};
  justify-content: flex-start;
  flex-wrap: wrap;
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

const Profile = ({ isMobile }) => {
  const contents = ["WHO AM I", "SKILLS", "CONTACT"];
  return (
    <StyledProfile>
      <ContentHeader text={"PROFILE"} contents={contents} isMobile={isMobile}></ContentHeader>
      <StyledProfileContent>
        <StyledContentSection isMobile={isMobile}>
          <StyledSectionTitle>
            <Paragraph text={"WHO AM I"} color={"black"} fontSize={"1.6rem"}></Paragraph>
          </StyledSectionTitle>
          <StyledArticle isMobile={isMobile}>
            <StyledArticleContentBox width={"50%;"}></StyledArticleContentBox>
            <StyledArticleContentBox width={"50%;"}>
              <Paragraph
                text={"평범한 직장에서 엑셀 매크로를 만들다 개발의 매력에 푹 빠졌습니다."}
                color={"black"}
                fontSize={"1rem"}
                margin={"0 0 10px 0"}
              ></Paragraph>
              <Paragraph
                text={"6개월의 단기 국비 자바과정을 통해 개발에 입문했고, "}
                color={"black"}
                fontSize={"1rem"}
                margin={"0 0 10px 0"}
              ></Paragraph>
              <Paragraph
                text={"현재는 프론트엔드, 백엔드 모두 관심을 두고 있습니다."}
                color={"black"}
                fontSize={"1rem"}
                margin={"0 0 10px 0"}
              ></Paragraph>
              <Paragraph
                text={"밤새 이것 저것 배우고 만져보는 걸 좋아하고 "}
                color={"black"}
                fontSize={"1rem"}
                margin={"0 0 10px 0"}
              ></Paragraph>
              <Paragraph
                text={"배운것으로 무언가 만드는 건 더 좋아합니다."}
                color={"black"}
                fontSize={"1rem"}
                margin={"0 0 10px 0"}
              ></Paragraph>
              <Paragraph
                text={"저는 유쾌하고 깔끔한 성향의 사람이고 코드 역시 이런 성향을 추구합니다."}
                color={"black"}
                fontSize={"1rem"}
                margin={"0 0 10px 0"}
              ></Paragraph>
              <Paragraph
                text={"주변에서 많이 배우고 또 배운 것을 나눠주는 사람이 되려고 노력합니다."}
                color={"black"}
                fontSize={"1rem"}
                margin={"0 0 10px 0"}
              ></Paragraph>
              <Paragraph
                text={"와주신 분들도 제 주변인이 되어주셨으면 합니다. 감사합니다"}
                color={"black"}
                fontSize={"1rem"}
                margin={"0 0 10px 0"}
              ></Paragraph>
            </StyledArticleContentBox>
          </StyledArticle>
        </StyledContentSection>
      </StyledProfileContent>
      <ContentFooter></ContentFooter>
    </StyledProfile>
  );
};

export default Profile;
