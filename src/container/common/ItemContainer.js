import Item from "../../component/common/Item";
import { toggleMenuActions } from "../../store/module/toggleMenu";
import { programActions } from "../../store/module/program";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeBottomMenu: () => {
      dispatch(toggleMenuActions.CLOSE_ALL_MENU());
    },
    openProgram: ({ isOpen, target }) => {
      dispatch(programActions.OPEN_PROGRAM({ isOpen, target }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
