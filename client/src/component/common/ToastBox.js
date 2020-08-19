import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Toast from './Toast';

const StyledToastBox = styled.div`
  position: fixed;
  top: 50px;
  width: 270px;
  height: max-content;
  right: 30px;
  z-index: ${Number.MAX_SAFE_INTEGER};
  overflow: hidden;
`;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return windowSize;
};

const ToastBox = ({ toasts, removeToast }) => {
  const windowSize = useWindowSize();
  return (
    <StyledToastBox left={windowSize}>
      {toasts && toasts.map((ele, index) => <Toast key={ele.id} removeToast={removeToast} {...ele}></Toast>)}
    </StyledToastBox>
  );
};

export default ToastBox;
