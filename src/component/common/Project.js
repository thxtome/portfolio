import React from "react";
import styled from "styled-components";
import ContentFooter from "./ContentFooter";
import ContentHeader from "./ContentHeader";
const StyledProject = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background: #eaeaea;
`;
const StyledProjectContent = styled.div`
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

const Project = () => {
  const contents = ["DOUBLECOME", "EGACCOUNT", "MOMATO"];
  return (
    <StyledProject>
      <ContentHeader text={"PROJECT"} contents={contents}></ContentHeader>
      <StyledProjectContent></StyledProjectContent>
      <ContentFooter></ContentFooter>
    </StyledProject>
  );
};

export default Project;
