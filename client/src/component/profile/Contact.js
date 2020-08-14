import React from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import InputText from "../common/InputText";
import Button from "../common/Button";
import ContactCard from "./ContactCard";
import GithubIcon from "../../svg/contact/github.svg";
import EmailIcon from "../../svg/contact/email.svg";
import PhoneIcon from "../../svg/contact/phone.svg";

const StyledContentSection = styled.section`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: ${(props) => (props.isMobileView ? "30px 10px 0 10px" : "30px 15px 30px 15px")};
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
  width: 80%;
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
  justify-content: center;
  flex-wrap: wrap;
  min-width: 240px;
`;

const StyledContactMessageBox = styled.div`
  max-width: 350px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  min-width: 240px;
  background: #26272b;
  margin: 0 0 10px 10px;
  border-radius: 5px;
`;

const StyledContactCard = styled.div`
  width: 350px;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 240px;
  background: #26272b;
  margin: 0 0 10px 10px;
  border-radius: 5px;
`;

const contactOption = [
  { icon: GithubIcon, title: "Github", text: "https://github.com/thxtome" },
  { icon: PhoneIcon, title: "Phone", text: "010-7673-7941" },
  { icon: EmailIcon, title: "Email", text: "thxtome531@gmail.com" },
];

const Contact = ({ isMobileView, refs }) => {
  return (
    <StyledContentSection isMobileView={isMobileView} ref={refs}>
      <StyledSectionTitle>
        <Paragraph text={"Contact"} color={"black"} fontSize={"1.6rem"}></Paragraph>
        <StyledHr />
      </StyledSectionTitle>
      <StyledArticle isMobileView={isMobileView}>
        <StyledArticleContentBox width={"50%;"}>
          <form>
            <StyledContactMessageBox>
              <InputText
                width={"80%"}
                margin={"30px 0 0 0"}
                text={"성함"}
                background={"#fff"}
                fontSize={"0.8rem"}
                height={"25px"}
                color={"black"}
                required={true}
              />
              <InputText
                width={"80%"}
                margin={"15px 0 0 0"}
                text={"이메일"}
                background={"#fff"}
                fontSize={"0.8rem"}
                height={"25px"}
                color={"black"}
                type={"email"}
                required={true}
              />
              <InputText
                width={"80%"}
                margin={"15px 0 0 0"}
                text={"전화번호"}
                background={"#fff"}
                fontSize={"0.8rem"}
                height={"25px"}
                color={"black"}
                type={"tel"}
                required={true}
              />
              <textarea
                style={{ width: "80%", margin: "15px 0 0 0", background: "#fff", minHeight: "100px", resize: "none" }}
                placeholder={"메세지를 입력하세요."}
              />
              <Button
                text={"SEND"}
                width={"80%"}
                height={"30px"}
                margin={"15px 0 30px 0"}
                background={"#43399a"}
                color={"white"}
                hover={"#332a80"}
              ></Button>
            </StyledContactMessageBox>
          </form>
        </StyledArticleContentBox>
        <StyledArticleContentBox width={"50%;"}>
          {contactOption.map((ele, index) => {
            return <ContactCard {...ele} key={index}></ContactCard>;
          })}
        </StyledArticleContentBox>
      </StyledArticle>
    </StyledContentSection>
  );
};

export default Contact;
