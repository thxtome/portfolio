import toggleMenuReducer from "./module/toggleMenu";
import powerReducer from "./module/power";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  toggleMenuReducer,
  powerReducer,
});

const store = createStore(rootReducer);

export default store;
