import React from "react";
import styled from "styled-components";
import BottomBar from "./bottomBar/BottomBar";
import profileIcon from "../svg/profile.svg";
import projectIcon from "../svg/project.svg";
import folderIcon from "../svg/folder.svg";
import blogIcon from "../svg/blog.svg";
const programs = [
  {
    type: "profile",
    icon: profileIcon,
    background: "rgb(0, 131, 143,0.3)",
    text: "프로필",
    isMinimize: false,
    width: "1000px",
    height: "500px",
    top: "100px",
    left: "100px",
    zIndex: 0,
  },
  {
    type: "profile",
    icon: projectIcon,
    background: "rgb(24, 0, 235,0.3)",
    text: "프로젝트",
    isMinimize: false,
    width: "1000px",
    height: "500px",
    top: "100px",
    left: "100px",
    zIndex: 0,
  },
  {
    type: "profile",
    icon: folderIcon,
    background: "rgb(0, 214, 200, 0.3)",
    text: "공유폴더",
    isMinimize: false,
    width: "1000px",
    height: "500px",
    top: "100px",
    left: "100px",
    zIndex: 0,
  },
  {
    type: "profile",
    background: "rgb(203, 12, 242,0.3)",
    icon: blogIcon,
    text: "블로그",
    isMinimize: false,
    width: "1000px",
    height: "500px",
    top: "100px",
    left: "100px",
    zIndex: 0,
  },
];

function Layout() {
  return (
    <div className="Layout">
      <BottomBar programs={programs}></BottomBar>
    </div>
  );
}

export default Layout;
