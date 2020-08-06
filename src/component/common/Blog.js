import React from "react";
import styled from "styled-components";

const StyledBolg = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? props.padding : "none")};
  border: none;
`;

function Blog({ ...rest }) {
  return (
    <StyledBolg>
      <StyledIframe {...rest} src="https://thxtome.github.io/"></StyledIframe>
    </StyledBolg>
  );
}

export default Blog;
