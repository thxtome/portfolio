import BottomBar from "../../component/bottomBar/BottomBar";
import { programActions } from "../../store/module/toggleMenu";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { profile, project, folder, blog } = state.programReducer;
  return { programs: [profile, project, folder, blog] };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
