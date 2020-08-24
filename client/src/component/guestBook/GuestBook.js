import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ContentFooter from '../common/ContentFooter';
import ContentHeader from '../common/ContentHeader';
import Paragraph from '../common/Paragraph';
import Posts from '../../container/guestBook/PostsContainer';

const StyledGuestBook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background: #eaeaea;
`;
const StyledGuestBookContent = styled.div`
  width: 90%;
  max-width: 1120px;
  height: max-content%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: -100px;
  background: #fff;
`;

const StyledContentSection = styled.section`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: ${props => (props.isMobileView ? '30px 10px 0 10px' : '10px 15px 30px 15px')};
`;

const StyledSectionTitle = styled.title`
  width: 100%;
  max-width: 1120px;
  font-family: 'Do Hyeon';
  height: max-content;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const StyledHr = styled.hr`
  width: 70%;
  height: 1px;
  background: black;
  align-self: center;
`;

const GuestBook = ({ isMobileView }) => {
  const [isRequiredLoad, setIsRequiredLoad] = useState(false);
  const handleScroll = e => {
    if (e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 450) {
      if (!isRequiredLoad) {
        setIsRequiredLoad(true);
      }
    }
  };
  
  return (
    <StyledGuestBook
      onScroll={e => {
        handleScroll(e);
      }}
    >
      <ContentHeader text={'GuestBook'} isMobileView={isMobileView}></ContentHeader>
      <StyledGuestBookContent>
        <StyledContentSection>
          <StyledSectionTitle>
            <Paragraph text={'방명록'} color={'black'} fontSize={'1.4rem'} fontWeight={'bold'}></Paragraph>
            <StyledHr />
          </StyledSectionTitle>
          <Posts isRequiredLoad={isRequiredLoad} setIsRequiredLoad={setIsRequiredLoad}></Posts>
        </StyledContentSection>
      </StyledGuestBookContent>
      <ContentFooter></ContentFooter>
    </StyledGuestBook>
  );
};

export default GuestBook;
