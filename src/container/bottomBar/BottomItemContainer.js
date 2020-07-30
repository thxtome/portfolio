import BottomItem from "../../component/common/Item";
import { toggleMenuActions } from "../../store/module/toggleMenu";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeBottomMenu: () => {
      dispatch(toggleMenuActions.CLOSE_ALL_MENU());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomItem);
