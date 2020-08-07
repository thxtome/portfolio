import Desktop from "../../component/desktop/Desktop";
import { toggleMenuActions } from "../../store/module/toggleMenu";
import { programActions } from "../../store/module/program";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { profile, project, folder, blog } = state.programReducer;
  return { programs: [profile, project, blog, folder] };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeBottomMenu: () => {
      dispatch(toggleMenuActions.CLOSE_ALL_MENU());
    },

    closeProgram: ({ target }) => {
      dispatch(programActions.CLOSE_PROGRAM({ target }));
    },

    openWindow: ({ target }) => {
      dispatch(programActions.OPEN_PROGRAM({ target }));
    },

    changeWindowLocation: ({ location, target }) => {
      dispatch(programActions.CHANGE_WINDOW_LOCATION({ location, target }));
    },

    changeWindowSize: ({ size, target }) => {
      dispatch(programActions.CHANGE_WINDOW_SIZE({ size, target }));
    },

    minimizeWindow: ({ target }) => {
      dispatch(programActions.MINIMIZE_PROGRAM({ target }));
    },

    maximizeWindow: ({ target }) => {
      dispatch(programActions.MAXIMIZE_PROGRAM({ target }));
    },

    releaseMaximizeWindow: ({ target }) => {
      dispatch(programActions.RELEASE_MAXIMIZE_PROGRAM({ target }));
    },

    focusOnWindow: ({ target }) => {
      dispatch(programActions.FOCUS_ON_WINDOW({ target }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
