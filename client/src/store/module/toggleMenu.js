import { createAction, createReducer } from "@reduxjs/toolkit";

const OPEN_START_MENU = createAction("OPEN_START_MENU");
const OPEN_CALENDAR_MENU = createAction("OPEN_CALENDAR_MENU");
const CLOSE_START_MENU = createAction("CLOSE_START_MENU");
const CLOSE_CALENDAR_MENU = createAction("CLOSE_CALENDAR_MENU");
const CLOSE_ALL_MENU = createAction("CLOSE_ALL_MENU");
const TOGGLE_START_MENU = createAction("TOGGLE_START_MENU");
const TOGGLE_CALENDAR_MENU = createAction("TOGGLE_CALENDAR_MENU");

export const toggleMenuActions = {
  OPEN_START_MENU,
  OPEN_CALENDAR_MENU,
  CLOSE_START_MENU,
  CLOSE_CALENDAR_MENU,
  CLOSE_ALL_MENU,
  TOGGLE_START_MENU,
  TOGGLE_CALENDAR_MENU,
};

const initialState = {
  isStartMenuOpend: false,
  isCalendarMenuOpend: false,
};

const reducer = createReducer(initialState, {
  [OPEN_START_MENU]: (state) => {
    return { ...state, isStartMenuOpend: true };
  },
  [OPEN_CALENDAR_MENU]: (state) => {
    return { ...state, isCalendarMenuOpend: true };
  },
  [CLOSE_START_MENU]: (state) => {
    return { ...state, isStartMenuOpend: false };
  },
  [CLOSE_CALENDAR_MENU]: (state) => {
    return { ...state, isCalendarMenuOpend: false };
  },
  [CLOSE_ALL_MENU]: (state) => {
    return { ...state, isCalendarMenuOpend: false, isStartMenuOpend: false };
  },
  [TOGGLE_START_MENU]: (state) => {
    return { ...state, isStartMenuOpend: !state.isStartMenuOpend };
  },
  [TOGGLE_CALENDAR_MENU]: (state) => {
    return { ...state, isCalendarMenuOpend: !state.isCalendarMenuOpend };
  },
});

export default reducer;
