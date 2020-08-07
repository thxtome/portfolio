import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : "30px")};
  height: ${(props) => (props.height ? props.height : "30px")};
  text-align: ${(props) => (props.textAlien ? props.textAlien : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  background: ${(props) => (props.background ? props.background : "none")};
  border: ${(props) => (props.border ? props.border : "none")};
  transform: ${(props) => (props.transform ? props.transform : "none")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "none")};
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : "")};
  &:focus {
    border: none;
    border-image-width: 0px;
    outline: ${(props) => (props.outline ? props.outline : "none")};
    outline-radius: 4px;
    outline-style: ${(props) => (props.outline ? "auto" : "none")};
  }
  &:active {
    color: #999;
  }
  &:hover {
    background: ${(props) => (props.hover ? props.hover : "none")};
  }
`;

const Button = ({ text, onclick, ...rest }) => {
  return (
    <StyledButton {...rest} onClick={onclick ? onclick : () => {}}>
      {text ? text : " "}
    </StyledButton>
  );
};

export default Button;
