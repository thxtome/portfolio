import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Paragraph from '../common/Paragraph';
import Textarea from '../common/Textarea';
import IconButton from '../common/IconButton';
import SaveSvg from '../../svg/guestbook/save.svg';
import LockSvg from '../../svg/guestbook/lock.svg';
import InputText from '../common/InputText';
import Button from '../common/Button';
import { vaildDispacher } from '../../lib/validation';

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
  justify-content: start;
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
  display: flex;
  justify-content: space-between;
`;

const StyledButtons = styled.div`
  width: 45px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const Post = ({ isMobileView, addToast }) => {
  const [isSecret, setIsSecret] = useState(false);
  const nickname = useInput(null);
  const content = useInput(null);
  const password = useInput(null);
  const PostVaildTest = () => {
    const items = [
      { type: '닉네임', value: nickname.value, addToast: addToast, required: true },
      { type: '내용', value: content.value, addToast: addToast, required: true },
      { type: '비밀번호', value: password.value, addToast: addToast, required: true },
    ];
    return vaildDispacher(items);
  };
  const sendPost = () => {
    let post = { nickname: nickname.value, content: content.value, password: password.value, isSecret };
  };
  return (
    <StyledCard>
      <StyledTextBox>
        <InputText
          text={'닉네임'}
          color={'black'}
          fontSize={'0.9rem'}
          fontWeight={'bold'}
          onchange={nickname.onChange}
          maxLength={10}
        />
      </StyledTextBox>
      <StyledTextBox>
        <Paragraph text={'2020-08-15'} color={'black'} fontSize={'0.8rem'} margin={'0 0 0 5px'} />
      </StyledTextBox>
      <StyledContentBox background={'#ddd'}>
        <Textarea
          placeholder={'여기서부터 글이 시작됩니다.'}
          color={'black'}
          fontSize={'1rem'}
          width={'100%'}
          onchange={content.onChange}
          maxLength={100}
        />
        <StyledButtonBox>
          <InputText
            text={'비밀번호를 입력해주세요.'}
            type={'password'}
            background={'none'}
            height={'20px'}
            color={'black'}
            fontSize={'0.8rem'}
            onchange={password.onChange}
            maxLength={20}
          ></InputText>
          <StyledButtons>
            <IconButton
              src={LockSvg}
              width={'18px'}
              height={'18px'}
              onclick={() => {
                setIsSecret(!isSecret);
              }}
              background={isSecret ? '#47ff368a' : ''}
            ></IconButton>
            <IconButton
              src={SaveSvg}
              width={'18px'}
              height={'18px'}
              onclick={() => {
                PostVaildTest();
                sendPost();
              }}
            >
              <StyledButtons></StyledButtons>
            </IconButton>
          </StyledButtons>
        </StyledButtonBox>
      </StyledContentBox>
    </StyledCard>
  );
};

export default Post;
