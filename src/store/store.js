import toggleMenuReducer from "./module/toggleMenu";
import powerReducer from "./module/power";
import programReducer from "./module/program";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  toggleMenuReducer,
  powerReducer,
  programReducer,
});

const store = createStore(rootReducer);

export default store;
