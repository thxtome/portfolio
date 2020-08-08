import BottomBar from "../../component/bottomBar/BottomBar";
import { toggleMenuActions } from "../../store/module/toggleMenu";
import { programActions } from "../../store/module/program";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { profile, project, blog, guestBook } = state.programReducer;
  return { programs: [profile, project, blog, guestBook] };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeBottomMenu: () => {
      dispatch(toggleMenuActions.CLOSE_ALL_MENU());
    },
    openWindow: ({ target }) => {
      dispatch(programActions.OPEN_PROGRAM({ target }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
