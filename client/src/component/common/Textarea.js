import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: ${(props) => (props.width ? props.width : "30px")};
  height: ${(props) => (props.height ? props.height : "30px")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "")};
  resize: none;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  background: ${(props) => (props.background ? props.background : "none")};
  border: ${(props) => (props.border ? props.border : "none")};
  padding: 5px 0 0 5px;
  &:focus {
    border: none;
    border-image-width: 0px;
    outline: none;
    outline-radius: 4px;
    outline-style: none;
  }
`;

const Textarea = ({ placeholder, text, onchange, ...rest }) => {
  return (
    <StyledTextarea onChange={onchange} {...rest} placeholder={placeholder}>
      {text && text}
    </StyledTextarea>
  );
};

export default Textarea;
