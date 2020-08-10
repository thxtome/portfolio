import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  width: ${(props) => (props.width ? props.width : "max-content")};
  height: ${(props) => (props.height ? props.height : "max-content")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  font-family: inherit;
  overflow-wrap: break-word;
  max-width: 100%;
`;

const Paragraph = ({ text, ...rest }) => {
  return <StyledParagraph {...rest}>{text ? text : "사용자 화면 구성중"}</StyledParagraph>;
};

export default Paragraph;
