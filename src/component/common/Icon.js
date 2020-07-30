import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: ${(props) => (props.type === "bottom" ? "40px" : props.type === "start" ? "50px" : "60px")};
  height: ${(props) => (props.type === "bottom" ? "40px" : props.type === "start" ? "50px" : "60px")};
`;

function Icon({ src, closeBottomMenu, ...rest }) {
  return <StyledImg {...rest} src={src} onClick={closeBottomMenu} />;
}

export default Icon;
