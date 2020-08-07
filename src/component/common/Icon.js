import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : "60px")};
  height: ${(props) => (props.height ? `${props.height}px` : "60px")};
`;

const Icon = ({ src, ...rest }) => {
  return <StyledImg {...rest} src={src} />;
};

export default Icon;
