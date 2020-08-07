import React, { useState } from "react";
import styled from "styled-components";
import ClockLoader from "react-spinners/ClockLoader";

const StyledBolg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? props.padding : "none")};
  border: none;
  display: ${(props) => (props.isLoading ? "none" : "block")};
`;

const Blog = ({ ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <StyledBolg>
      {isLoading ? <ClockLoader size={150} color={"gray"} loading={true} /> : ""}
      <StyledIframe
        isLoading={isLoading}
        {...rest}
        src="https://thxtome.github.io/"
        onLoad={() => {
          setIsLoading(false);
        }}
      ></StyledIframe>
    </StyledBolg>
  );
};

export default Blog;
