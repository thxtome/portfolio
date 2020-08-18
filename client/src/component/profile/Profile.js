import React, { useRef } from "react";
import styled from "styled-components";
import ContentFooter from "../common/ContentFooter";
import ContentHeader from "../common/ContentHeader";
import WhoAmI from "./WhoAmI";
import Skills from "./Skills";
import ContactContainer from "../../container/profile/ContactContainer";

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
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: -50px;
  background: #fff;
`;

const Profile = ({ isMobileView }) => {
  const contents = ["WHO AM I", "SKILLS", "CONTACT"];
  const whoAmIRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  const refs = [whoAmIRef, skillsRef, contactRef];
  return (
    <StyledProfile>
      <ContentHeader text={"PROFILE"} contents={contents} refs={refs} isMobileView={isMobileView}></ContentHeader>
      <StyledProfileContent>
        <WhoAmI isMobileView={isMobileView} refs={whoAmIRef} />
        <Skills isMobileView={isMobileView} refs={skillsRef} />
        <ContactContainer isMobileView={isMobileView} refs={contactRef} />
      </StyledProfileContent>
      <ContentFooter></ContentFooter>
    </StyledProfile>
  );
};

export default Profile;
