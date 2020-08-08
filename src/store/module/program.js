import { createAction, createReducer } from "@reduxjs/toolkit";
import profileIcon from "../../svg/profile.svg";
import projectIcon from "../../svg/project.svg";
import folderIcon from "../../svg/folder.svg";
import blogIcon from "../../svg/blog.svg";
import _ from "lodash";
import Blog from "../../component/common/Blog";
import Profile from "../../component/common/Profile";
import Project from "../../component/common/Project";
import GuestBook from "../../component/common/GuestBook";

const CHANGE_WINDOW_LOCATION = createAction("CHANGE_WINDOW_LOCATION");
const CHANGE_WINDOW_SIZE = createAction("CHANGE_WINDOW_SIZE");
const OPEN_PROGRAM = createAction("OPEN_PROGRAM");
const CLOSE_PROGRAM = createAction("CLOSE_PROGRAM");
const MINIMIZE_PROGRAM = createAction("MINIMIZE_PROGRAM");
const MAXIMIZE_PROGRAM = createAction("MAXIMIZE_PROGRAM");
const RELEASE_MAXIMIZE_PROGRAM = createAction("RELEASE_MAXIMIZE_PROGRAM");
const FOCUS_ON_WINDOW = createAction("FOCUS_ON_WINDOW");

export const programActions = {
  CHANGE_WINDOW_LOCATION,
  CHANGE_WINDOW_SIZE,
  OPEN_PROGRAM,
  CLOSE_PROGRAM,
  MINIMIZE_PROGRAM,
  MAXIMIZE_PROGRAM,
  RELEASE_MAXIMIZE_PROGRAM,
  FOCUS_ON_WINDOW,
};

const initialState = {
  profile: {
    type: "profile",
    icon: profileIcon,
    background: "rgb(0, 131, 143,0.3)",
    text: "프로필",
    isMinimized: false,
    isMaximized: false,
    size: { width: 800, height: 400 },
    prevSize: { width: 200, height: 300 },
    location: { top: 100, left: 100 },
    prevLocation: { width: 100, height: 100 },
    zIndex: 100,
    isOpen: false,
    Content: Profile,
  },
  project: {
    type: "project",
    icon: projectIcon,
    background: "rgb(24, 0, 235,0.3)",
    text: "프로젝트",
    isMinimized: false,
    isMaximized: false,
    size: { width: 384, height: 400 },
    prevSize: { width: 200, height: 300 },
    location: { top: 100, left: 100 },
    prevLocation: { width: 100, height: 100 },
    zIndex: 100,
    isOpen: false,
    Content: Project,
  },
  blog: {
    type: "blog",
    background: "rgb(203, 12, 242,0.3)",
    icon: blogIcon,
    text: "블로그",
    isMinimized: false,
    isMaximized: false,
    size: { width: 384, height: 400 },
    prevSize: { width: 200, height: 300 },
    location: { top: 100, left: 100 },
    prevLocation: { width: 100, height: 100 },
    zIndex: 100,
    isOpen: false,
    Content: Blog,
  },
  guestBook: {
    type: "guestBook",
    icon: folderIcon,
    background: "rgb(0, 214, 200, 0.3)",
    text: "방명록",
    isMinimized: false,
    isMaximized: false,
    size: { width: 384, height: 400 },
    prevSize: { width: 200, height: 300 },
    location: { top: 100, left: 100 },
    prevLocation: { width: 100, height: 100 },
    zIndex: 100,
    isOpen: false,
    Content: GuestBook,
  },
  maxZindex: 100,
};

const reducer = createReducer(initialState, {
  [CHANGE_WINDOW_LOCATION]: (state, action) => {
    const target = _.cloneDeep(state[action.payload.target]);
    const programs = { ...state };
    programs[action.payload.target] = target;
    target.location = action.payload.location;
    return programs;
  },

  [OPEN_PROGRAM]: (state, action) => {
    const target = _.cloneDeep(state[action.payload.target]);
    const programs = { ...state, maxZindex: state.maxZindex + 1 };
    programs[action.payload.target] = target;
    target.isOpen = true;
    target.isMinimized = false;
    target.zIndex = programs.maxZindex;
    return programs;
  },

  [CLOSE_PROGRAM]: (state, action) => {
    const target = _.cloneDeep(state[action.payload.target]);
    const programs = { ...state };
    programs[action.payload.target] = target;
    target.isOpen = false;
    target.isMinimized = false;
    return programs;
  },

  [MINIMIZE_PROGRAM]: (state, action) => {
    const target = _.cloneDeep(state[action.payload.target]);
    const programs = { ...state };
    programs[action.payload.target] = target;
    target.isMinimized = true;
    return programs;
  },

  [MAXIMIZE_PROGRAM]: (state, action) => {
    const target = _.cloneDeep(state[action.payload.target]);
    const programs = { ...state };
    programs[action.payload.target] = target;
    target.isMaximized = true;
    target.prevSize = { ...target.size };
    target.prevLocation = { ...target.location };
    return programs;
  },

  [RELEASE_MAXIMIZE_PROGRAM]: (state, action) => {
    const target = _.cloneDeep(state[action.payload.target]);
    const programs = { ...state };
    programs[action.payload.target] = target;
    target.isMaximized = false;
    target.size = { ...target.prevSize };
    target.location = { ...target.prevLocation };
    return programs;
  },

  [CHANGE_WINDOW_SIZE]: (state, action) => {
    const target = _.cloneDeep(state[action.payload.target]);
    const programs = { ...state };
    programs[action.payload.target] = target;
    target.size = action.payload.size;
    return programs;
  },

  [FOCUS_ON_WINDOW]: (state, action) => {
    const target = _.cloneDeep(state[action.payload.target]);
    const programs = { ...state, maxZindex: state.maxZindex + 1 };
    programs[action.payload.target] = target;
    target.zIndex = programs.maxZindex;
    return programs;
  },
});

export default reducer;
