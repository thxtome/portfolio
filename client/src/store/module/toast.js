import { createAction, createReducer } from "@reduxjs/toolkit";
import _ from "lodash";

const ADD_TOAST = createAction("ADD_TOAST");
const REMOVE_TOAST = createAction("REMOVE_TOAST");

export const toastActions = {
  ADD_TOAST,
  REMOVE_TOAST,
};

const initialState = { toasts: [], sequence: 0 };

const reducer = createReducer(initialState, {
  [ADD_TOAST]: (state, action) => {
    let toasts = _.cloneDeep(state.toasts);
    let toast = action.payload;
    toast.id = state.sequence;
    toasts.push(toast);
    return { ...state, toasts, sequence: state.sequence + 1 };
  },

  [REMOVE_TOAST]: (state, action) => {
    console.log(action.payload);
    let toasts = _.cloneDeep(state.toasts);
    return {
      ...state,
      toasts: toasts.filter((toast) => {
        return toast.id !== action.payload;
      }),
    };
  },
});

export default reducer;
