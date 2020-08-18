import ToastBox from "../../component/common/ToastBox";
import { toastActions } from "../../store/module/toast";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const toasts = state.toastReducer.toasts;
  return { toasts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToast: (toast) => {
      dispatch(toastActions.ADD_TOAST(toast));
    },
    removeToast: (toastId) => {
      dispatch(toastActions.REMOVE_TOAST(toastId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToastBox);
