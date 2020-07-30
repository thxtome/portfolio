import PowerScreen from "../../component/powerScreen/PowerScreen";
import { powerActions } from "../../store/module/power";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { powerState, isRequiredPowerScreen } = state.powerReducer;
  return { powerState, isRequiredPowerScreen };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unmountPowerScreen: () => {
      dispatch(powerActions.UNMOUNT_POWER_SCREEN());
    },
    changePowerState: (powerState) => {
      dispatch(powerActions.CHANGE_POWER({ powerState }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PowerScreen);
