import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./component/Layout";
import PowerScreenContainer from "./container/powerScreen/PowerScreenContainer";

const GlobalStyle = createGlobalStyle`
html, body {
    padding: 0;
    margin: 0;
    height:100%;
    width:100%;
    overflow:hidden;
  }
 
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
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
