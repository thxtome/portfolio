import WritePost from '../../component/guestBook/WritePost';
import { toastActions } from '../../store/module/toast';
import { programActions } from '../../store/module/program';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {};
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WritePost);
