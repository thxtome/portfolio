import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Paragraph from '../common/Paragraph';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import InputText from '../common/InputText';
import IconButton from '../common/IconButton';
import Form from '../common/Form';
import PencilSvg from '../../svg/guestbook/pencil.svg';
import TrashSvg from '../../svg/guestbook/trash.svg';
import SaveSvg from '../../svg/guestbook/save.svg';
import LockSvg from '../../svg/guestbook/lock.svg';
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
  width: max-content;
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

const iconButtonStyle = { width: '18px', height: '18px', margin: '0 10px 0 0' };

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  const onChange = e => {
    setValue(e.target.value);
  };
  const clearValue = e => {
    setValue(null);
  };
  const changeValue = value => {
    setValue(value);
  };
  return { value, onChange, clearValue, changeValue };
};

const postVaildTest = (postInputs, addToast) => {
  return vaildDispacher(
    postInputs.map(input => {
      return { ...input };
    }),
    addToast,
  );
};

const clearpasswordInputs = (formRef, passwordInputs) => {
  formRef.current.reset();
  passwordInputs.forEach(({ input }) => {
    input.clearValue();
  });
};

const passwordVaildTest = (passwordInputs, addToast) => {
  return vaildDispacher(
    passwordInputs.map(input => {
      return { ...input };
    }),
    addToast,
  );
};

const postDateFormat = postDate => {
  let dateTime = postDate.substr(0, 16);
  const dates = dateTime.split('T');
  return `${dates[0]} ${dates[1]}`;
};

const Post = ({
  id,
  content,
  nickname,
  postDate,
  isLocked,
  confirmPostPassword,
  addToast,
  openLoadingClock,
  isPasswordCorrect,
  clearConfirmPasswordResult,
  modifyPostRequest,
  clearModifingPostResult,
  deletePostRequest,
  clearDeletingPostResult,
}) => {
  const [isModifing, setIsModifing] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isUnlock, setIsUnlock] = useState(false);
  const [action, setAction] = useState(null);
  const password = useInput(null);
  const modifiedContent = useInput(null);
  const passwordInputs = [{ input: password, type: '비밀번호', required: true }];
  const formRef = useRef();
  const postInputs = [{ input: modifiedContent, type: '내용', required: true }];

  const modifyPost = (postInputs, addToast, { id, content, isLocked, nickname, postDate }) => {
    if (!postVaildTest(postInputs, addToast)) {
      return;
    }
    modifyPostRequest({ id, content, isLocked, nickname, postDate });
    setIsModifing(false);
  };

  const handleClickBtn = action => {
    if (isUnlock) {
      actionDispacher(action);
    } else {
      setIsPasswordOpen(!isPasswordOpen);
      setAction(action);
    }
  };

  const actionDispacher = action => {
    switch (action) {
      case 'unlock':
        return;

      case 'modify':
        setIsModifing(true);
        modifiedContent.changeValue(content);
        break;

      case 'delete':
        deletePostRequest(id);
        break;

      case 'save':
        modifyPost(postInputs, addToast, { id, content: modifiedContent.value, isLocked, nickname, postDate });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (isPasswordCorrect === undefined) {
      return;
    }

    if (isPasswordCorrect) {
      setIsUnlock(true);
    } else {
      addToast({ text: '비밀번호가 맞지 않습니다.', type: 'error' });
    }

    clearConfirmPasswordResult(id);
    clearpasswordInputs(formRef, passwordInputs);
  }, [isPasswordCorrect]);

  useEffect(() => {
    if (isUnlock) {
      setIsPasswordOpen(false);
      actionDispacher(action);
    }
  }, [isUnlock]);

  return (
    <StyledCard>
      <Form ref={formRef}>
        <StyledTextBox>
          <Paragraph text={nickname} color={'black'} fontSize={'1rem'} fontWeight={'bold'} />
        </StyledTextBox>
        <StyledTextBox>
          <Paragraph text={postDateFormat(postDate)} color={'black'} fontSize={'0.8rem'} />
        </StyledTextBox>
        <StyledContentBox background={'#ddd'}>
          {isModifing && isUnlock ? (
            <Textarea
              placeholder={'여기서부터 글이 시작됩니다.'}
              color={'black'}
              fontSize={'1rem'}
              width={'100%'}
              defaultValue={content}
              onchange={modifiedContent.onChange}
            />
          ) : (
            <Paragraph
              text={content}
              color={'black'}
              fontSize={'0.8rem'}
              margin={'0px 0px 10px 0px'}
              width={'100%'}
              textAlign={'left'}
            />
          )}

          <StyledButtonBox>
            <StyledButtons>
              {isModifing && isUnlock ? (
                <IconButton
                  src={SaveSvg}
                  {...iconButtonStyle}
                  onclick={() => {
                    handleClickBtn('save');
                  }}
                ></IconButton>
              ) : (
                <>
                  {isLocked && !isUnlock ? (
                    <IconButton
                      src={LockSvg}
                      {...iconButtonStyle}
                      onclick={() => {
                        handleClickBtn('lock');
                      }}
                    ></IconButton>
                  ) : (
                    ''
                  )}
                  <IconButton
                    src={PencilSvg}
                    {...iconButtonStyle}
                    onclick={() => {
                      handleClickBtn('modify');
                    }}
                  ></IconButton>
                  <IconButton
                    src={TrashSvg}
                    {...iconButtonStyle}
                    onclick={() => {
                      handleClickBtn('delete');
                    }}
                  ></IconButton>
                </>
              )}
            </StyledButtons>
          </StyledButtonBox>
          <StyledPasswordBox isPasswordOpen={isPasswordOpen}>
            <InputText
              text={'비밀번호를 입력해주세요.'}
              background={'none'}
              height={'20px'}
              color={'black'}
              fontSize={'0.8rem'}
              type={'password'}
              onchange={password.onChange}
            ></InputText>
            <Button
              text={'입력'}
              width={'45px'}
              height={'80%'}
              background={'rgb(85, 169, 255)'}
              fontSize={'0.8rem'}
              hover={'rgb(46 135 226)'}
              onclick={() => {
                if (!passwordVaildTest(passwordInputs, addToast)) {
                  return;
                }
                confirmPostPassword({
                  id,
                  password: password.value,
                });
                openLoadingClock();
              }}
            ></Button>
          </StyledPasswordBox>
        </StyledContentBox>
      </Form>
    </StyledCard>
  );
};

export default Post;
