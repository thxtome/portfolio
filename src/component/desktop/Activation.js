import React from "react";
import styled from "styled-components";
import Paragraph from "../common/Paragraph";

const StyledActivation = styled.aside`
  position: fixed;
  width: 280px;
  height: max-content;
  bottom: 60px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 0 15px 15px 0;
`;

const Activation = () => {
  return (
    <StyledActivation>
      <Paragraph text={"유쾌한 개발자"} fontSize={"1.2rem"} margin={"0 0 0 100px"}></Paragraph>
      <Paragraph text={"Build 930329"} fontSize={"1.2rem"} margin={"5px 0 0 0"}></Paragraph>
      <Paragraph text={"이 portfolio는 정품이 맞습니다."} fontSize={"1.2rem"} margin={"5px 0 0 0"}></Paragraph>
    </StyledActivation>
  );
};

export default Activation;
