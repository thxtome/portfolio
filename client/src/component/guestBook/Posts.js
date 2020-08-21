import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WritePost from './WritePost';
import Post from './Post';

const StyledPosts = styled.article`
  width: 100%;
  max-width: 1120px;
  height: max-content;
  display: flex;
  box-sizing: border-box;
  padding: ${props => (props.isMobileView ? '15px 0 0 0' : '30px 5px 0 5px')};
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;
const StyledEmptyPost = styled.article`
  width: 320px;
  min-width: 240px;
  padding: 0;
  margin: 0;
  min-height: 0px;
  height: 0px;
  border: 0px;
`;

const getPosts = (getPostsRequest, openLoadingClock, setPage, page) => {
  getPostsRequest(page);
  openLoadingClock();
  setPage(page + 1);
};

const Posts = ({
  isRequiredLoad,
  setIsRequiredLoad,
  getPostsRequest,
  isGettingPostsSucceed,
  isGettingPostsFailed,
  clearGettingPostResult,
  clearPostsRequest,
  isLast,
  posts,

  addToast,
  addPostRequest,
  isAddingPostSucceed,
  isAddingPostFailed,
  openLoadingClock,
  closeLoadingClock,
  clearAddingPostResult,

  confirmPostPassword,
  clearConfirmPasswordResult,
  isConfirmingPasswordSucceed,
  isConfirmingPasswordFailed,

  modifyPostRequest,
  clearModifingPostResult,
  isModifingPostSucceed,
  isModifingPostFailed,

  deletePostRequest,
  isDeletingPostSucceed,
  isDeletingPostFailed,
  clearDeletingPostResult,
}) => {
  const writeProps = {
    addToast,
    addPostRequest,
    clearAddingPostResult,
    isAddingPostSucceed,
    isAddingPostFailed,
    openLoadingClock,
    closeLoadingClock,
  };

  const postProps = {
    addToast,
    confirmPostPassword,
    clearConfirmPasswordResult,
    openLoadingClock,
    closeLoadingClock,
    modifyPostRequest,
    clearModifingPostResult,
    deletePostRequest,
    clearDeletingPostResult,
  };

  const [page, setPage] = useState(0);
  useEffect(() => {
    getPosts(getPostsRequest, openLoadingClock, setPage, page);
    return () => {
      clearPostsRequest();
    };
  }, []);

  useEffect(() => {
    if (isAddingPostSucceed) {
      getPosts(getPostsRequest, openLoadingClock, setPage, page);
    }
  }, [isAddingPostSucceed]);

  useEffect(() => {
    if (isGettingPostsSucceed || isGettingPostsFailed) clearGettingPostResult();
    setTimeout(() => {
      setIsRequiredLoad(false);
      closeLoadingClock();
    }, 500);
  }, [isGettingPostsSucceed, isGettingPostsFailed]);

  useEffect(() => {
    closeLoadingClock();
  }, [isConfirmingPasswordSucceed, isConfirmingPasswordFailed]);

  useEffect(() => {
    if (isRequiredLoad && !isLast) {
      getPosts(getPostsRequest, openLoadingClock, setPage, page);
    }
  }, [isRequiredLoad]);

  return (
    <StyledPosts>
      <WritePost {...writeProps} />
      {posts && posts.map(post => <Post {...post} {...postProps} key={post.id} />)}
      <StyledEmptyPost></StyledEmptyPost>
      <StyledEmptyPost></StyledEmptyPost>
    </StyledPosts>
  );
};

export default Posts;
