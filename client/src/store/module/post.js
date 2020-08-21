import { createAction, createReducer } from '@reduxjs/toolkit';
import { update } from 'lodash';

const ADD_POST = createAction('ADD_POST');
const ADD_POST_SUCCEED = createAction('ADD_POST_SUCCEED');
const ADD_POST_FAILED = createAction('ADD_POST_FAILED');
const CLEAR_ADDING_POST_RESULT = createAction('CLEAR_ADDING_POST_RESULT');

const GET_POSTS = createAction('GET_POSTS');
const GET_POSTS_SUCCEED = createAction('GET_POSTS_SUCCEED');
const GET_POSTS_FAILED = createAction('GET_POSTS_FAILED');
const CLEAR_GETTING_POST_RESULT = createAction('CLEAR_GETTING_POST_RESULT');
const CLEAR_POSTS = createAction('CLEAR_POSTS');

const CONFIRM_PASSWORD = createAction('CONFIRM_PASSWORD');
const CONFIRM_PASSWORD_SUCCEED = createAction('CONFIRM_PASSWORD_SUCCEED');
const CONFIRM_PASSWORD_FAILED = createAction('CONFIRM_PASSWORD_FAILED');
const CLEAR_CONFIRMING_PASSWORD_RESULT = createAction('CLEAR_CONFIRMING_PASSWORD_RESULT');

const MODIFY_POST = createAction('MODIFY_POST');
const MODIFY_POST_SUCCEED = createAction('MODIFY_POST_SUCCEED');
const MODIFY_POST_FAILED = createAction('MODIFY_POST_FAILED');
const CLEAR_MODIFING_POST_RESULT = createAction('CLEAR_MODIFING_POST_RESULT');

const DELETE_POST = createAction('DELETE_POST');
const DELETE_POST_SUCCEED = createAction('DELETE_POST_SUCCEED');
const DELETE_POST_FAILED = createAction('DELETE_POST_FAILED');
const CLEAR_DELETING_POST_RESULT = createAction('CLEAR_DELETING_POST_RESULT');

export const postActions = {
  ADD_POST,
  ADD_POST_SUCCEED,
  ADD_POST_FAILED,
  CLEAR_ADDING_POST_RESULT,
  GET_POSTS,
  GET_POSTS_SUCCEED,
  GET_POSTS_FAILED,
  CLEAR_GETTING_POST_RESULT,
  MODIFY_POST,
  MODIFY_POST_SUCCEED,
  MODIFY_POST_FAILED,
  CLEAR_MODIFING_POST_RESULT,
  DELETE_POST,
  DELETE_POST_SUCCEED,
  DELETE_POST_FAILED,
  CLEAR_DELETING_POST_RESULT,
  CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_SUCCEED,
  CONFIRM_PASSWORD_FAILED,
  CLEAR_CONFIRMING_PASSWORD_RESULT,

  CLEAR_POSTS,
};

const initialState = {
  isAddingPostSucceed: false,
  isAddingPostFailed: false,

  isGettingPostsSucceed: false,
  isGettingPostsFailed: false,

  isConfirmingPasswordSucceed: false,
  isConfirmingPasswordFailed: false,

  isModifingPostSucceed: false,
  isModifingPostFailed: false,

  isDeletingPostSucceed: false,
  isDeletingPostFailed: false,

  posts: [],
  isLast: false,
  isPasswordCorrect: false,
  postId: null,
};

const reducer = createReducer(initialState, {
  [ADD_POST]: state => {
    return { ...state };
  },
  [ADD_POST_SUCCEED]: (state, action) => {
    const post = { ...action.payload };
    const posts = [post, ...state.posts];
    return { ...state, posts, isAddingPostSucceed: true };
  },
  [ADD_POST_FAILED]: state => {
    return { ...state, isAddingPostFailed: true };
  },
  [CLEAR_ADDING_POST_RESULT]: state => {
    return { ...state, isAddingPostSucceed: false, isAddingPostFailed: false };
  },

  [GET_POSTS]: state => {
    return { ...state };
  },
  [GET_POSTS_SUCCEED]: (state, action) => {
    const newPost = action.payload;
    const posts = [...state.posts, ...newPost];
    let isLast = newPost.length !== 15 ? true : false;
    return { ...state, isGettingPostsSucceed: true, posts, isLast };
  },
  [GET_POSTS_FAILED]: state => {
    return { ...state, isGettingPostsFailed: true };
  },
  [CLEAR_GETTING_POST_RESULT]: state => {
    return { ...state, isGettingPostsSucceed: false, isGettingPostsFailed: false };
  },
  [CLEAR_POSTS]: state => {
    return { ...state, posts: [], isLast: false };
  },

  [MODIFY_POST]: state => {
    return { ...state };
  },
  [MODIFY_POST_SUCCEED]: (state, action) => {
    const updatedPost = action.payload;
    const posts = state.posts.map(post => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      }
      return post;
    });
    return { ...state, posts, isModifingPostSucceed: true };
  },
  [MODIFY_POST_FAILED]: state => {
    return { ...state, isModifingPostFailed: true };
  },
  [CLEAR_MODIFING_POST_RESULT]: state => {
    return { ...state, isModifingPostSucceed: false, isModifingPostFailed: false };
  },

  [DELETE_POST]: state => {
    return { ...state };
  },
  [DELETE_POST_SUCCEED]: (state, action) => {
    const { id } = action.payload;
    const posts = state.posts.filter(post => post.id !== id);
    return { ...state, posts, isDeletingPostSucceed: true };
  },
  [DELETE_POST_FAILED]: state => {
    return { ...state, isDeletingPostFailed: true };
  },
  [CLEAR_DELETING_POST_RESULT]: state => {
    return { ...state, isDeletingPostSucceed: false, isDeletingPostFailed: false };
  },

  [CONFIRM_PASSWORD]: state => {
    return { ...state };
  },

  [CONFIRM_PASSWORD_SUCCEED]: (state, action) => {
    const {
      post: { id, content },
      result,
    } = action.payload;
    const addAttr = result ? { content, isPasswordCorrect: result } : { isPasswordCorrect: result };
    const posts = state.posts.map(post => {
      if (post.id === id) {
        return { ...post, ...addAttr };
      }
      return post;
    });
    return { ...state, posts, isConfirmingPasswordSucceed: true };
  },

  [CONFIRM_PASSWORD_FAILED]: state => {
    return { ...state, isConfirmingPasswordFailed: true };
  },

  [CLEAR_CONFIRMING_PASSWORD_RESULT]: (state, action) => {
    const id = action.payload;
    const posts = state.posts.map(post => {
      if (post.id === id) {
        return { ...post, isPasswordCorrect: undefined };
      }
      return post;
    });
    return { ...state, posts, isConfirmingPasswordFailed: false, isConfirmingPasswordSucceed: false };
  },
});

export default reducer;
