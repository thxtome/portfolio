import React from "react";
import styled from "styled-components";

const StyledInputText = styled.input`
  color: ${(props) => (props.color ? props.color : "white")};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  background: ${(props) => (props.background ? props.background : "none")};
  border: ${(props) => (props.border ? props.border : "none")};
  &:focus {
    border: none;
    border-image-width: 0px;
    outline: ${(props) => (props.outline ? props.outline : "none")};
    outline-radius: 4px;
    outline-style: ${(props) => (props.outline ? "auto" : "none")};
  }
  // padding-left: 5px;
`;

const InputText = ({ text, onclick, ...rest }) => {
  return <StyledInputText type={"text"} placeholder={text ? text : ""} {...rest}></StyledInputText>;
};

export default InputText;
