import React, { useRef } from "react";
import styled from "styled-components";
import ContentFooter from "../common/ContentFooter";
import ContentHeader from "../common/ContentHeader";
import Paragraph from "../common/Paragraph";
import WritePost from "./WritePost";
import Post from "./Post";

const StyledGuestBook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background: #eaeaea;
`;
const StyledGuestBookContent = styled.div`
  width: 90%;
  max-width: 1120px;
  height: max-content%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: -100px;
  background: #fff;
`;

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
  align-items: flex-start;
`;
const StyledEmptyPost = styled.article`
  width: 320px;
  min-width: 240px;
  padding: 0;
  margin: 0;
  min-height: 0px;
  height: 0px;
  border: 0px;
`;

const GuestBook = ({ isMobileView }) => {
  return (
    <StyledGuestBook>
      <ContentHeader text={"GuestBook"} isMobileView={isMobileView}></ContentHeader>
      <StyledGuestBookContent>
        <StyledContentSection>
          <StyledSectionTitle>
            <Paragraph text={"방명록"} color={"black"} fontSize={"1.4rem"} fontWeight={"bold"}></Paragraph>
            <StyledHr />
          </StyledSectionTitle>
          <StyledArticle>
            <WritePost />
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <StyledEmptyPost></StyledEmptyPost>
            <StyledEmptyPost></StyledEmptyPost>
          </StyledArticle>
        </StyledContentSection>
      </StyledGuestBookContent>
      <ContentFooter></ContentFooter>
    </StyledGuestBook>
  );
};

export default GuestBook;
