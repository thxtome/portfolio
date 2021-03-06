import Posts from '../../component/guestBook/Posts';
import { toastActions } from '../../store/module/toast';
import { programActions } from '../../store/module/program';
import { postActions } from '../../store/module/post';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const {
    isAddingPostSucceed,
    isAddingPostFailed,
    posts,
    isGettingPostsSucceed,
    isGettingPostsFailed,
    isLast,
    isConfirmingPasswordSucceed,
    isConfirmingPasswordFailed,
  } = state.postReducer;
  return {
    isAddingPostSucceed,
    isAddingPostFailed,
    posts,
    isGettingPostsSucceed,
    isGettingPostsFailed,
    isLast,
    isConfirmingPasswordSucceed,
    isConfirmingPasswordFailed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToast: toast => {
      dispatch(toastActions.ADD_TOAST(toast));
    },
    openLoadingClock: () => {
      dispatch(programActions.OPEN_LOADING_CLOCK({ target: 'guestBook' }));
    },
    closeLoadingClock: () => {
      dispatch(programActions.CLOSE_LOADING_CLOCK({ target: 'guestBook' }));
    },

    addPostRequest: post => {
      dispatch(postActions.ADD_POST(post));
    },
    clearAddingPostResult: () => {
      dispatch(postActions.CLEAR_ADDING_POST_RESULT());
    },

    getPostsRequest: page => {
      dispatch(postActions.GET_POSTS(page));
    },
    clearPostsRequest: () => {
      dispatch(postActions.CLEAR_POSTS());
    },
    clearGettingPostResult: () => {
      dispatch(postActions.CLEAR_GETTING_POST_RESULT());
    },

    confirmPostPassword: ({ id, password }) => {
      dispatch(postActions.CONFIRM_PASSWORD({ id, password }));
    },
    clearConfirmPasswordResult: id => {
      dispatch(postActions.CLEAR_CONFIRMING_PASSWORD_RESULT(id));
    },

    modifyPostRequest: post => {
      dispatch(postActions.MODIFY_POST(post));
    },
    clearModifingPostResult: () => {
      dispatch(postActions.CLEAR_MODIFING_POST_RESULT());
    },

    deletePostRequest: postId => {
      dispatch(postActions.DELETE_POST(postId));
    },
    clearDeletingPostResult: () => {
      dispatch(postActions.CLEAR_DELETING_POST_RESULT());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
