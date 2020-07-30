import { createAction, createReducer } from "@reduxjs/toolkit";

const UNMOUNT_POWER_SCREEN = createAction("UNMOUNT_POWER_SCREEN");
const ON_POWER = createAction("ON_POWER");
const OFF_POWER = createAction("OFF_POWER");
const SAVING_POWER = createAction("SAVING_POWER");
const SELECT_POWER = createAction("SELECT_POWER");
const RESTART_POWER = createAction("RESTART_POWER");
const CHANGE_POWER = createAction("CHANGE_POWER");

export const POWER_STATE = { off: 0, on: 1, selectMode: 2, restart: 3, saveMode: 4 };

export const powerActions = {
  UNMOUNT_POWER_SCREEN,
  ON_POWER,
  OFF_POWER,
  SAVING_POWER,
  SELECT_POWER,
  RESTART_POWER,
  CHANGE_POWER,
};

const initialState = {
  isRequiredPowerScreen: true,
  powerState: POWER_STATE.on,
};

const reducer = createReducer(initialState, {
  [UNMOUNT_POWER_SCREEN]: (state) => {
    return { ...state, isRequiredPowerScreen: false };
  },
  [ON_POWER]: (state) => {
    return { ...state, isRequiredPowerScreen: true, powerState: POWER_STATE.on };
  },
  [OFF_POWER]: (state) => {
    return { ...state, isRequiredPowerScreen: true, powerState: POWER_STATE.off };
  },
  [SAVING_POWER]: (state) => {
    return { ...state, isRequiredPowerScreen: true, powerState: POWER_STATE.saveMode };
  },
  [SELECT_POWER]: (state) => {
    return { ...state, isRequiredPowerScreen: true, powerState: POWER_STATE.selectMode };
  },
  [RESTART_POWER]: (state) => {
    return { ...state, isRequiredPowerScreen: true, powerState: POWER_STATE.restart };
  },
  [CHANGE_POWER]: (state, action) => {
    return { ...state, isRequiredPowerScreen: true, powerState: action.payload.powerState };
  },
});

export default reducer;
