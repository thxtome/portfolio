import Contact from '../../component/profile/Contact';
import { messageActions } from '../../store/module/message';
import { toastActions } from '../../store/module/toast';
import { programActions } from '../../store/module/program';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { isSendMessageSucceed, isSendMessageFailed } = state.contactReducer;
  return { isSendMessageSucceed, isSendMessageFailed };
};

const mapDispatchToProps = dispatch => {
  return {
    sendContactMessage: message => {
      dispatch(messageActions.SEND_CONTACT_MESSAGE(message));
    },
    ClearMessageSendResult: () => {
      dispatch(messageActions.CLEAR_MESSAGE_SEND_RESULT());
    },
    addToast: toast => {
      dispatch(toastActions.ADD_TOAST(toast));
    },
    openLoadingClock: () => {
      dispatch(programActions.OPEN_LOADING_CLOCK({ target: 'profile' }));
    },
    closeLoadingClock: () => {
      dispatch(programActions.CLOSE_LOADING_CLOCK({ target: 'profile' }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
