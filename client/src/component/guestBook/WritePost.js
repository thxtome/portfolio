import React, { useRef, useState } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import Textarea from "../common/Textarea";
import IconButton from "../common/IconButton";
import SaveSvg from "../../svg/guestbook/save.svg";
import LockSvg from "../../svg/guestbook/lock.svg";
import InputText from "../common/InputText";

const StyledCard = styled.div`
  width: 320px;
  min-width: 240px;
  height: max-content;
  min-height: 100px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 10px 5px 10px;
  margin: 10px 0 10px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-top: 5px solid #55a9ff;
  border-radius: 3px;
`;

const StyledTextBox = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledContentBox = styled.div`
  width: 100%;
  height: max-content;
  background: #eee;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  margin-bottom: 5px;
`;

const StyledButtonBox = styled.div`
  width: 95%;
  height: 30px;
  background: #eee;
  box-sizing: border-box;
  border-top: 1px solid #cdcdcd;
  align-self: center;
  padding-top: 10px;
`;

const StyledButtons = styled.div`
  width: 45px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

const Post = ({ isMobileView }) => {
  const [isSecret, setIsSecret] = useState(false);
  return (
    <StyledCard>
      <StyledTextBox>
        <InputText text={"닉네입"} color={"black"} fontSize={"1rem"} fontWeight={"bold"} />
      </StyledTextBox>
      <StyledTextBox>
        <Paragraph text={"2020-08-15"} color={"black"} fontSize={"0.8rem"} />
      </StyledTextBox>
      <StyledContentBox background={"#ddd"}>
        <Textarea placeholder={"여기서부터 글이 시작됩니다."} color={"black"} fontSize={"1rem"} width={"100%"} />
        <StyledButtonBox>
          <StyledButtons>
            <IconButton
              src={LockSvg}
              width={"18px"}
              height={"18px"}
              onclick={() => {
                setIsSecret(!isSecret);
              }}
              background={isSecret ? "#47ff368a" : ""}
            ></IconButton>
            <IconButton src={SaveSvg} width={"18px"} height={"18px"}></IconButton>
          </StyledButtons>
        </StyledButtonBox>
      </StyledContentBox>
    </StyledCard>
  );
};

export default Post;
