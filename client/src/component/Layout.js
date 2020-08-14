import React from "react";
import DesktopContainer from "../container/desktop/DesktopContainer";
import BottomBarContainer from "../container/bottomBar/BottomBarContainer";

function Layout() {
  return (
    <div className="Layout">
      <DesktopContainer></DesktopContainer>
      <BottomBarContainer></BottomBarContainer>
    </div>
  );
}

export default Layout;
