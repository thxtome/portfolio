import { createAction, createReducer } from "@reduxjs/toolkit";
import profileIcon from "../../svg/profile.svg";
import projectIcon from "../../svg/project.svg";
import folderIcon from "../../svg/folder.svg";
import blogIcon from "../../svg/blog.svg";
import _ from "lodash";

const CHANGE_WINDOW_LOCATION = createAction("CHANGE_WINDOW_LOCATION");

export const programActions = {
  CHANGE_WINDOW_LOCATION,
};

const initialState = {
  profile: {
    type: "profile",
    icon: profileIcon,
    background: "rgb(0, 131, 143,0.3)",
    text: "프로필",
    isMinimize: false,
    width: "1000px",
    height: "500px",
    location: { top: "100px", left: "100px" },
    zIndex: 0,
  },
  project: {
    type: "project",
    icon: projectIcon,
    background: "rgb(24, 0, 235,0.3)",
    text: "프로젝트",
    isMinimize: false,
    width: "1000px",
    height: "500px",
    location: { top: "100px", left: "100px" },
    zIndex: 0,
  },
  folder: {
    type: "folder",
    icon: folderIcon,
    background: "rgb(0, 214, 200, 0.3)",
    text: "공유폴더",
    isMinimize: false,
    width: "1000px",
    height: "500px",
    location: { top: "100px", left: "100px" },
    zIndex: 0,
  },
  blog: {
    type: "bolg",
    background: "rgb(203, 12, 242,0.3)",
    icon: blogIcon,
    text: "블로그",
    isMinimize: false,
    width: "1000px",
    height: "500px",
    location: { top: "100px", left: "100px" },
    zIndex: 0,
  },
};

const reducer = createReducer(initialState, {
  [CHANGE_WINDOW_LOCATION]: (state, action) => {
    const profile = _.cloneDeep(state[action.payload.target]);
    profile.location = action.payload.location;
    return { ...state, profile };
  },
});

export default reducer;
