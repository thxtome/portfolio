import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../common/Paragraph';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import InputText from '../common/InputText';
import IconButton from '../common/IconButton';
import PencilSvg from '../../svg/guestbook/pencil.svg';
import TrashSvg from '../../svg/guestbook/trash.svg';
import SaveSvg from '../../svg/guestbook/save.svg';

const StyledCard = styled.div`
  width: 320px;
  min-width: 240px;
  height: max-content;
  min-height: 100px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 10px 5px 10px;
  margin: 10px 0 10px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-top: 5px solid #55a9ff;
  border-radius: 3px;
`;

const StyledTextBox = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledContentBox = styled.div`
  width: 100%;
  height: max-content;
  background: #eee;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

const StyledButtonBox = styled.div`
  width: 95%;
  height: 30px;
  background: #eee;
  box-sizing: border-box;
  border-top: 1px solid #cdcdcd;
  align-self: center;
  padding-top: 10px;
`;

const StyledButtons = styled.div`
  width: 45px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

const StyledPasswordBox = styled.div`
  width: 100%;
  height: ${props => (props.isPasswordOpen ? '30px' : '0')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  transition: 0.5s;
  overflow: hidden;
`;

const Post = ({ isMobileView }) => {
  const [isModifing, setIsModifing] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  return (
    <StyledCard>
      <StyledTextBox>
        <Paragraph text={'nickname'} color={'black'} fontSize={'1rem'} fontWeight={'bold'} />
      </StyledTextBox>
      <StyledTextBox>
        <Paragraph text={'2020-08-15'} color={'black'} fontSize={'0.8rem'} />
      </StyledTextBox>
      <StyledContentBox background={'#ddd'}>
        {isModifing ? (
          <Textarea
            placeholder={'여기서부터 글이 시작됩니다.'}
            color={'black'}
            fontSize={'1rem'}
            width={'100%'}
            defaultValue={
              '여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다.'
            }
          />
        ) : (
          <Paragraph
            text={
              '여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다.여기서부터 글이 시작됩니다.'
            }
            color={'black'}
            fontSize={'0.8rem'}
            margin={'0px 0px 10px 0px'}
          />
        )}

        <StyledButtonBox>
          <StyledButtons>
            <IconButton
              src={isModifing ? SaveSvg : PencilSvg}
              width={'18px'}
              height={'18px'}
              onclick={() => {
                setIsPasswordOpen(!isPasswordOpen);
              }}
            ></IconButton>
            <IconButton
              src={TrashSvg}
              width={'18px'}
              height={'18px'}
              onclick={() => {
                setIsPasswordOpen(!isPasswordOpen);
              }}
            ></IconButton>
          </StyledButtons>
        </StyledButtonBox>
        <StyledPasswordBox isPasswordOpen={isPasswordOpen}>
          <InputText
            text={'비밀번호를 입력해주세요.'}
            background={'none'}
            height={'20px'}
            color={'black'}
            fontSize={'0.8rem'}
          ></InputText>
          <Button
            text={'입력'}
            width={'40px'}
            height={'80%'}
            background={'rgb(85, 169, 255)'}
            fontSize={'0.8rem'}
            hover={'rgb(46 135 226)'}
          ></Button>
        </StyledPasswordBox>
      </StyledContentBox>
    </StyledCard>
  );
};

export default Post;
