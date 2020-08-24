import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Paragraph from '../common/Paragraph';
import Textarea from '../common/Textarea';
import IconButton from '../common/IconButton';
import SaveSvg from '../../svg/guestbook/save.svg';
import LockSvg from '../../svg/guestbook/lock.svg';
import InputText from '../common/InputText';
import Form from '../common/Form';
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
  border-top: 5px solid #8f31ca;
  border-radius: 3px;
`;

const StyledTextBox = styled.div`
  width: 100%;
  height: 30px;
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
  const clearValue = e => {
    setValue(null);
  };
  return { value, onChange, clearValue };
};

const clearPostInputs = (formRef, postInputs) => {
  formRef.current.reset();
  postInputs.forEach(({ input }) => {
    input.clearValue();
  });
};

const postVaildTest = (postInputs, addToast) => {
  return vaildDispacher(
    postInputs.map(input => {
      return { ...input };
    }),
    addToast,
  );
};

const Post = ({
  addToast,
  addPostRequest,
  isAddingPostSucceed,
  isAddingPostFailed,
  openLoadingClock,
  closeLoadingClock,
  clearAddingPostResult,
}) => {
  const [isLocked, setIsLocked] = useState(false);
  const nickname = useInput(null);
  const content = useInput(null);
  const password = useInput(null);
  const formRef = useRef();

  const postInputs = [
    { input: nickname, type: '닉네임', required: true },
    { input: content, type: '내용', required: true },
    { input: password, type: '비밀번호', required: true },
  ];

  useEffect(() => {
    if (!isAddingPostSucceed && !isAddingPostFailed) {
      return;
    }

    if (isAddingPostSucceed) {
      clearPostInputs(formRef, postInputs);
      addToast({ text: '방명록을 등록했습니다.', type: 'info' });
    } else {
      addToast({ text: '방명록 등록에 오류가 발생했습니다.', type: 'error' });
    }
    closeLoadingClock();
    clearAddingPostResult();
  }, [isAddingPostSucceed, isAddingPostFailed]);

  return (
    <StyledCard>
      <Form ref={formRef}>
        <StyledTextBox>
          <InputText
            text={'닉네임을 입력해주세요'}
            color={'black'}
            fontSize={'0.9rem'}
            fontWeight={'bold'}
            onchange={nickname.onChange}
            maxLength={10}
          />
        </StyledTextBox>
        <StyledContentBox background={'#ddd'}>
          <Textarea
            placeholder={'내용을 입력해주세요.'}
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
                  setIsLocked(!isLocked);
                }}
                background={isLocked ? '#47ff368a' : ''}
              ></IconButton>
              <IconButton
                src={SaveSvg}
                width={'18px'}
                height={'18px'}
                onclick={() => {
                  if (!postVaildTest(postInputs, addToast)) {
                    return;
                  }
                  addPostRequest({
                    nickname: nickname.value,
                    content: content.value,
                    password: password.value,
                    isLocked,
                  });
                  openLoadingClock();
                }}
              >
                <StyledButtons></StyledButtons>
              </IconButton>
            </StyledButtons>
          </StyledButtonBox>
        </StyledContentBox>
      </Form>
    </StyledCard>
  );
};

export default Post;
