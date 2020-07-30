import CalendarMenu from "../../../component/bottomBar/calendarMenu/CalendarMenu";
import { toggleMenuActions } from "../../../store/module/toggleMenu";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const { isCalendarMenuOpend } = state.toggleMenuReducer;
  return { isCalendarMenuOpend };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openCalendarMenu: () => {
      dispatch(toggleMenuActions.OPEN_CALENDAR_MENU());
    },
    closeCalendarMenu: () => {
      dispatch(toggleMenuActions.ClOSE_CALENDAR_MENU());
    },
    toggleCalendarMenu: () => {
      dispatch(toggleMenuActions.TOGGLE_CALENDAR_MENU());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarMenu);
