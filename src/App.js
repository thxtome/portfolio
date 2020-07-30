import React, { useState, useEffect } from "react";
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
  }
 
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  const [isLoading, setIsLoading] = useState(!sessionStorage.getItem("isReVisit"));
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("isReVisit", true);
    }, 2000);
  }, []);

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
