import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const StyledContentHeader = styled.div`
  width: 100%;
  height: 190px;
  background: #26272b;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StyledContentTitle = styled.div`
  width: 90%;
  max-width: 1120px;
  height: 140px;
  background: #26272b;
  font-family: "Do Hyeon";
  padding: ${(props) => (props.isMobileView ? "10px" : "15px")};
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const StyledContentUl = styled.ul`
  width: 90%;
  max-width: 1120px;
  height: 50px;
  background: #33363b;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const StyledContentLi = styled.li`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  list-style: none;
  font-size: 0.7rem;
  color: #ddd;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #2e3035;
  }
`;

const ContentHeader = ({ text, contents, isMobileView, refs }) => {
  return (
    <StyledContentHeader>
      <StyledContentTitle isMobileView={isMobileView}>
        <Paragraph text={text} fontSize={"1.6rem"}></Paragraph>
      </StyledContentTitle>
      {contents ? (
        <StyledContentUl>
          {contents.map((text, index) => {
            return (
              <StyledContentLi
                key={index}
                onClick={(e) => {
                  if (refs[index].current) {
                    console.log(refs[index].current.offsetTop);
                    e.target.parentNode.parentNode.parentNode.scrollTo({
                      top: refs[index].current.offsetTop + 190,
                      left: 0,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {text}
              </StyledContentLi>
            );
          })}
        </StyledContentUl>
      ) : (
        ""
      )}
    </StyledContentHeader>
  );
};

export default ContentHeader;
