import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import InputText from "../common/InputText";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import ContactCard from "./ContactCard";
import GithubIcon from "../../svg/contact/github.svg";
import EmailIcon from "../../svg/contact/email.svg";
import PhoneIcon from "../../svg/contact/phone.svg";
import { vaildDispacher } from "../../lib/validation";

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

const contactOption = [
  { icon: GithubIcon, title: "Github", text: "https://github.com/thxtome" },
  { icon: PhoneIcon, title: "Phone", text: "010-7673-7941" },
  { icon: EmailIcon, title: "Email", text: "thxtome531@gmail.com" },
];

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const Contact = ({
  isMobileView,
  refs,
  sendContactMessage,
  isSendMessageSucceed,
  addToast,
  ClearMessageSendSucceed,
}) => {
  const senderName = useInput(null);
  const senderEmail = useInput(null);
  const senderPnum = useInput(null);
  const content = useInput(null);

  const messageVaildTest = () => {
    const items = [
      { type: "이름", value: senderName.value, addToast: addToast, required: true },
      { type: "이메일", value: senderEmail.value, addToast: addToast, required: true },
      { type: "핸드폰번호", value: senderPnum.value, addToast: addToast, required: true },
      { type: "내용", value: content.value, addToast: addToast, required: true },
    ];
    return vaildDispacher(items);
  };
  
  useEffect(() => {
    if (isSendMessageSucceed) {
      ClearMessageSendSucceed();
      addToast({ text: "메세지를 전송하였습니다.", type: "info" });
    }
  }, [isSendMessageSucceed]);

  return (
    <StyledContentSection isMobileView={isMobileView} ref={refs}>
      <StyledSectionTitle>
        <Paragraph text={"Contact"} color={"black"} fontSize={"1.6rem"}></Paragraph>
        <StyledHr />
      </StyledSectionTitle>
      <StyledArticle isMobileView={isMobileView}>
        <StyledArticleContentBox width={"50%;"}>
          <StyledContactMessageBox>
            <InputText
              width={"80%"}
              margin={"30px 0 0 0"}
              text={"성함"}
              background={"#fff"}
              fontSize={"0.8rem"}
              color={"black"}
              maxLength={"10"}
              onchange={senderName.onChange}
            />
            <InputText
              width={"80%"}
              margin={"15px 0 0 0"}
              text={"이메일"}
              fontSize={"0.8rem"}
              color={"black"}
              type={"email"}
              required={true}
              maxLength={"50"}
              onchange={senderEmail.onChange}
            />
            <InputText
              width={"80%"}
              margin={"15px 0 0 0"}
              text={"전화번호"}
              fontSize={"0.8rem"}
              color={"black"}
              type={"tel"}
              required={true}
              maxLength={"13"}
              onchange={senderPnum.onChange}
              pattern={"[0-9]{10}"}
            />
            <Textarea
              width={"80%"}
              margin={"15px 0 0 0"}
              background={"#fff"}
              minHeight={"100px"}
              resize={"none"}
              placeholder={"메세지를 입력하세요."}
              maxLength={"1000"}
              onchange={content.onChange}
            />
            <Button
              text={"SEND"}
              width={"80%"}
              height={"30px"}
              margin={"15px 0 30px 0"}
              background={"#43399a"}
              color={"white"}
              hover={"#332a80"}
              onclick={() => {
                if (!messageVaildTest()) {
                  return;
                }
                sendContactMessage({
                  senderName: senderName.value,
                  senderEmail: senderEmail.value,
                  senderPnum: senderPnum.value,
                  content: content.value,
                });
              }}
            ></Button>
          </StyledContactMessageBox>
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
