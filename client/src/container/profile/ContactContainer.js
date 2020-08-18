import Contact from "../../component/profile/Contact";
import { messageActions } from "../../store/module/message";
import { toastActions } from "../../store/module/toast";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { isSendMessageSucceed } = state.contactReducer;
  return { isSendMessageSucceed };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendContactMessage: (message) => {
      dispatch(messageActions.SEND_CONTACT_MESSAGE(message));
    },
    ClearMessageSendSucceed: () => {
      dispatch(messageActions.CLEAR_MESSAGE_SEND_SUCCEED());
    },
    addToast: (toast) => {
      dispatch(toastActions.ADD_TOAST(toast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
