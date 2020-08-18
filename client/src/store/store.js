import { combineReducers, createStore, applyMiddleware } from "redux";
import toggleMenuReducer from "./module/toggleMenu";
import powerReducer from "./module/power";
import programReducer from "./module/program";
import contactReducer from "./module/message";
import toastReducer from "./module/toast";

import saga from "../lib/saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  toggleMenuReducer,
  powerReducer,
  programReducer,
  contactReducer,
  toastReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
