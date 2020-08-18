import { createAction, createReducer } from "@reduxjs/toolkit";

const SEND_CONTACT_MESSAGE = createAction("SEND_CONTACT_MESSAGE");
const SEND_CONTACT_MESSAGE_SUCCEED = createAction("SEND_CONTACT_MESSAGE_SUCCEED");
const SEND_CONTACT_MESSAGE_FAILED = createAction("SEND_CONTACT_MESSAGE_FAILED");
const CLEAR_MESSAGE_SEND_SUCCEED = createAction("CLEAR_MESSAGE_SEND_SUCCEED");

export const messageActions = {
  SEND_CONTACT_MESSAGE,
  SEND_CONTACT_MESSAGE_SUCCEED,
  SEND_CONTACT_MESSAGE_FAILED,
  CLEAR_MESSAGE_SEND_SUCCEED,
};

const initialState = { isSendMessageSucceed: false };

const reducer = createReducer(initialState, {
  [SEND_CONTACT_MESSAGE]: (state) => {
    return { ...state };
  },
  [SEND_CONTACT_MESSAGE_SUCCEED]: (state) => {
    return { ...state, isSendMessageSucceed: true };
  },
  [SEND_CONTACT_MESSAGE_FAILED]: (state) => {
    return { ...state, isSendMessageSucceed: false };
  },
  [CLEAR_MESSAGE_SEND_SUCCEED]: (state) => {
    return { ...state, isSendMessageSucceed: false };
  },
});

export default reducer;
