import Desktop from "../../component/desktop/Desktop";
import { toggleMenuActions } from "../../store/module/toggleMenu";
import { programActions } from "../../store/module/program";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { profile, project, folder, blog } = state.programReducer;
  return { programs: [profile, project, folder, blog] };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeBottomMenu: () => {
      dispatch(toggleMenuActions.CLOSE_ALL_MENU());
    },

    changeWindowLocation: ({ location, target }) => {
      dispatch(programActions.CHANGE_WINDOW_LOCATION({ location, target }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
