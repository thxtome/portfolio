import React from "react";
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
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
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
`;

const StyledSectionTitle = styled.title`
  width: 100%;
  max-width: 1120px;
  font-family: "Do Hyeon";
  height: max-content;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 30px 0 0 30px;
`;

const StyledArticle = styled.article`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  padding: 30px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Profile = () => {
  const contents = ["WHO AM I", "SKILLS", "CONTACT"];
  return (
    <StyledProfile>
      <ContentHeader text={"PROFILE"} contents={contents}></ContentHeader>
      <StyledProfileContent>
        <StyledContentSection>
          <StyledSectionTitle>
            <Paragraph text={"WHO AM I"} color={"black"} fontSize={"1.6rem"}></Paragraph>
          </StyledSectionTitle>
          <StyledArticle>
            <Paragraph
              text={"만드는 걸 좋아하는 93년에 빌드된 대한민국 평범한 남자입니다."}
              color={"black"}
              fontSize={"1rem"}
            ></Paragraph>
            <Paragraph
              text={"평범한 직장에서 엑셀 VBA로 매크로를 만들다 개발의 매력에 푹 빠졌습니다."}
              color={"black"}
              fontSize={"1rem"}
            ></Paragraph>
            <Paragraph
              text={"새로운 기술을 배우는 걸 좋아하고 배운걸 써먹는 건 더 좋아합니다."}
              color={"black"}
              fontSize={"1rem"}
            ></Paragraph>
            <Paragraph
              text={"새로운 기술을 배우는 걸 좋아하고 배운걸 써먹는 건 더 좋아합니다."}
              color={"black"}
              fontSize={"1rem"}
            ></Paragraph>
          </StyledArticle>
        </StyledContentSection>
      </StyledProfileContent>
      <ContentFooter></ContentFooter>
    </StyledProfile>
  );
};

export default Profile;
