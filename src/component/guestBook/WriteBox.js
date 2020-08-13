import React, { useRef } from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";
import InputText from "../common/InputText";
import Button from "../common/Button";
import Textarea from "../common/Textarea";
import Icon from "../common/Icon";
import Camera from "../../svg/guestbook/camera.svg";

const StyledArticleContentBox = styled.article`
  width: 700px;
  min-width: 290px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 270px;
  margin-top: 10px;
  border: 1px solid #999;
`;

const StyledTextBox = styled.div`
  width: 700px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
`;

const StyledImgBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px 0 10px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  background: #999;
`;

const StyledButtonBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 40px;
  border-top: 1px solid #ddd;
  margin: 10px 0 0 0;
`;

const StyledUploadButtonBox = styled.div`
  height: max-content;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const WriteBox = ({ isMobileView }) => {
  return (
    <StyledArticleContentBox>
      <StyledTextBox>
        <InputText text={"닉네임"} color={"black"} height={"30px"} fontSize={"0.9rem"}></InputText>
        <Textarea
          width={"100%"}
          margin={"15px 0 0 0"}
          background={"#fff"}
          minHeight={"20px"}
          resize={"none"}
          fontSize={"0.9rem"}
          placeholder={"하고 싶으신 말을 편하게 적어주세요."}
        />
      </StyledTextBox>
      {/* <StyledImgBox>
        <StyledImg></StyledImg>
      </StyledImgBox> */}
      <StyledButtonBox>
        <StyledUploadButtonBox>
          <Icon width={25} height={20} src={Camera}></Icon>
          <Paragraph text={"사진"} color={"black"} width={"30px"} fontSize={"0.8rem"}></Paragraph>
        </StyledUploadButtonBox>
        <Button
          text={"등록"}
          color={"white"}
          width={"60px"}
          height={"100%"}
          background={"#525252"}
          hover={"#232323"}
        ></Button>
      </StyledButtonBox>
    </StyledArticleContentBox>
  );
};

export default WriteBox;
