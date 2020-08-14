import StartMenu from "../../../component/bottomBar/startMenu/StartMenu";
import { toggleMenuActions } from "../../../store/module/toggleMenu";
import { powerActions } from "../../../store/module/power";
import { programActions } from "../../../store/module/program";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { isStartMenuOpend } = state.toggleMenuReducer;
  return { isStartMenuOpend };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openStartMenu: () => {
      dispatch(toggleMenuActions.OPEN_START_MENU());
    },
    closeStartMenu: () => {
      dispatch(toggleMenuActions.ClOSE_START_MENU());
    },
    toggleStartMenu: () => {
      dispatch(toggleMenuActions.TOGGLE_START_MENU());
    },
    mountSelectPowerModal: () => {
      dispatch(powerActions.SELECT_POWER());
    },
    closeBottomMenu: () => {
      dispatch(toggleMenuActions.CLOSE_ALL_MENU());
    },
    openWindow: ({ target }) => {
      dispatch(programActions.OPEN_PROGRAM({ target }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
