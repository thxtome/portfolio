import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./component/Layout";
import PowerScreenContainer from "./container/powerScreen/PowerScreenContainer";

import DoHyeonEot from "./asset/font/do-hyeon/do-hyeon-v11-latin-regular.eot?#iefix";
import DoHyeonWoff2 from "./asset/font/do-hyeon/do-hyeon-v11-latin-regular.woff2";
import DoHyeonWoff from "./asset/font/do-hyeon/do-hyeon-v11-latin-regular.woff";
import DoHyeonTrueType from "./asset/font/do-hyeon/do-hyeon-v11-latin-regular.ttf";
import DoHyeonSvg from "./asset/font/do-hyeon/do-hyeon-v11-latin-regular.svg";

import NanumGothicRegularEot from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-regular.eot?#iefix";
import NanumGothicRegularWoff2 from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-regular.woff2";
import NanumGothicRegularWoff from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-regular.woff";
import NanumGothicRegularTtf from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-regular.ttf";
import NanumGothicRegularSvg from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-regular.svg";

import NanumGothicBoldEot from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-700.eot?#iefix";
import NanumGothicBoldWoff2 from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-700.woff2";
import NanumGothicBoldWoff from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-700.woff";
import NanumGothicBoldTtf from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-700.ttf";
import NanumGothicBoldSvg from "./asset/font/nanum-gothic/nanum-gothic-v17-latin_korean-700.svg";

const GlobalStyle = createGlobalStyle`
/* do-hyeon-regular - latin */
@font-face {
  font-family: 'Do Hyeon';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/do-hyeon-v11-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Do Hyeon Regular'), local('DoHyeon-Regular'),
       url('${DoHyeonEot}') format('embedded-opentype'), /* IE6-IE8 */
       url('${DoHyeonWoff2}') format('woff2'), /* Super Modern Browsers */
       url('${DoHyeonWoff}') format('woff'), /* Modern Browsers */
       url('${DoHyeonTrueType}') format('truetype'), /* Safari, Android, iOS */
       url('${DoHyeonSvg}') format('svg'); /* Legacy iOS */
}

/* nanum-gothic-regular - latin_korean */
@font-face {
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: 400;
  src: url('${NanumGothicRegularEot}'); /* IE9 Compat Modes */
  src: local('NanumGothic'),
       url('${NanumGothicRegularEot}') format('embedded-opentype'), /* IE6-IE8 */
       url('${NanumGothicRegularWoff2}') format('woff2'), /* Super Modern Browsers */
       url('${NanumGothicRegularWoff}') format('woff'), /* Modern Browsers */
       url('${NanumGothicRegularTtf}') format('truetype'), /* Safari, Android, iOS */
       url('${NanumGothicRegularSvg}') format('svg'); /* Legacy iOS */
}

/* nanum-gothic-700 - latin_korean */
@font-face {
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: 700;
  src: url('${NanumGothicBoldEot}'); /* IE9 Compat Modes */
  src: local('NanumGothic Bold'), local('NanumGothic-Bold'),
       url('${NanumGothicBoldEot}') format('embedded-opentype'), /* IE6-IE8 */
       url('${NanumGothicBoldWoff2}') format('woff2'), /* Super Modern Browsers */
       url('${NanumGothicBoldWoff}') format('woff'), /* Modern Browsers */
       url('${NanumGothicBoldTtf}') format('truetype'), /* Safari, Android, iOS */
       url('${NanumGothicBoldSvg}') format('svg'); /* Legacy iOS */
}

html, body {
    padding: 0;
    margin: 0;
    height:100%;
    width:100%;
    overflow:hidden;
  }
 
  body {
    margin: 0;
    // font: 14px "Nanum Gothic",  Arial, sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  
  #root{
    padding: 0;
    margin: 0;
    height:100%;
    width:100%;
    background:black;
  }

`;

const AppBlock = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppBlock>
        <PowerScreenContainer></PowerScreenContainer>
        <Layout></Layout>
      </AppBlock>
    </Provider>
  );
}

export default App;
