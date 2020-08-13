import React, { useRef } from "react";
import styled from "styled-components";
import ContentFooter from "../common/ContentFooter";
import ContentHeader from "../common/ContentHeader";
import Paragraph from "../common/Paragraph";
import WriteBox from "./WriteBox";
import Post from "./Post";
import Button from "../common/Button";

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

const StyledPosts = styled.article`
  width: 700px;
  min-width: 290px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 270px;
  margin-top: 10px;
`;

const StyledPagination = styled.div`
  width: 700px;
  min-width: 290px;
  height: 30px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 270px;
  margin-top: 10px;
`;

const GuestBook = ({ isMobileView }) => {
  return (
    <StyledGuestBook>
      <ContentHeader text={"GuestBook"} isMobileView={isMobileView}></ContentHeader>
      <StyledGuestBookContent>
        <StyledContentSection>
          <StyledSectionTitle>
            <Paragraph text={"방명록"} color={"black"} fontSize={"1.5rem"} fontWeight={"bold"}></Paragraph>
          </StyledSectionTitle>
          <WriteBox></WriteBox>
          <StyledPosts>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </StyledPosts>
          <StyledPagination>
            <Button text={"이전"} background={"#525252"} width={"90px"} height={"30px"} hover={"#232323"}></Button>
            <Button text={"다음"} background={"#525252"} width={"90px"} height={"30px"} hover={"#232323"}></Button>
          </StyledPagination>
        </StyledContentSection>
      </StyledGuestBookContent>
      <ContentFooter></ContentFooter>
    </StyledGuestBook>
  );
};

export default GuestBook;
