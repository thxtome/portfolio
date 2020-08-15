import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
`;

const Icon = ({ src, ...rest }) => {
  return <StyledImg {...rest} src={src} />;
};

export default Icon;
