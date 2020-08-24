import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';
import Icon from '../common/Icon';
import _ from 'lodash';
import isMobile from '../../lib/MobileDetect';
import ClockLoader from 'react-spinners/ClockLoader';
import {
  minMaxOrValue,
  calSizeWhenWindowResize,
  calLocationWhenWindowResize,
  calSizeWhenResizing,
  calLocationWhenResizing,
} from '../../lib/dragAndResize.js';

const StyledIsLoading = styled.div`
  width: 100%;
  min-height: calc(100% - 30px);
  background: #000;
  opacity: 0.6;
  position: relative;
  top: 31px;
  left: 0;
  z-index: ${Number.MAX_SAFE_INTEGER};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProgramBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #fff;
  border: 1px solid black;
`;

const StyledProgramHeader = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 3px;
`;

const StyledProgramContent = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  min-width: 300px;
`;

const StyledProgramTitle = styled.div`
  width: max-content;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 3px;
  background: #fff;
  flex-grow: 1;
  padding-left: 5px;
`;

const StyledTabResizeTab = styled.div`
  width: 110px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  flex-wrap: nowrap;
  float: right;
  flex-basis: 0;
`;

const MINLOC_TOP = 0;
const MINLOC_LEFT = 0;

const ProgramBox = ({
  program: { type, icon, text, isMinimized, isMaximized, size, location, zIndex, Content, isLoading },
  windowSize,
  changeWindowLocation,
  minimizeWindow,
  changeWindowSize,
  maximizeWindow,
  releaseMaximizeWindow,
  closeProgram,
  focusOnWindow,
}) => {
  const boxRef = useRef();
  const [resizeMode, setResizeMode] = useState('default');
  const [isResizing, setIsResizing] = useState(false);
  const isMobileView = size.width < 764;
  const [nextTop, setNextTop] = useState(location.top);
  const [nextLeft, setNextLeft] = useState(location.left);
  const [nextWidth, setNextWidth] = useState(size.width);
  const [nextHeight, setNextHeight] = useState(size.height);
  const calMaximizedSize = ({ width, height }) => {
    return { width: width - 2, height: isMobile ? height : height - 60 };
  };
  const maximizedSize = calMaximizedSize(windowSize);

  const calMoveX = (() => {
    let moveX = 0;
    return value => (moveX += value);
  })();

  const calMoveY = (() => {
    let moveY = 0;
    return value => (moveY += value);
  })();

  const calNextTop = (() => {
    let moveTop = 0;
    let nextTop = 0;
    return (value, topMax, currentTop) => {
      if (value === undefined) {
        return nextTop;
      }
      if (topMax === undefined) {
        nextTop = value;
        return nextTop;
      }
      moveTop += value;
      nextTop = minMaxOrValue(MINLOC_TOP, topMax, moveTop + currentTop);
      return nextTop;
    };
  })();

  const calNextLeft = (() => {
    let moveLeft = 0;
    let nextLeft = 0;
    return (value, LeftMax, currentLeft) => {
      if (value === undefined) {
        return nextLeft;
      }
      if (LeftMax === undefined) {
        nextLeft = value;
        return nextLeft;
      }
      moveLeft += value;
      nextLeft = minMaxOrValue(MINLOC_LEFT, LeftMax, moveLeft + currentLeft);
      return nextLeft;
    };
  })();

  const calNextWidth = (() => {
    let nextWidth = 0;
    return value => {
      if (value !== undefined) {
        nextWidth = value;
      }
      return nextWidth;
    };
  })();

  const calNextHeight = (() => {
    let nextHeight = 0;
    return value => {
      if (value !== undefined) {
        nextHeight = value;
      }
      return nextHeight;
    };
  })();

  const changeWindowSizeTotal = ({ width, height }) => {
    changeWindowSize({
      size: { width, height },
      target: type,
    });
    setNextWidth(width);
    setNextHeight(height);
  };

  const changeWindowLocationTotal = ({ top, left }) => {
    changeWindowLocation({
      location: { top, left },
      target: type,
    });
    setNextTop(top);
    setNextLeft(left);
  };

  const divStyle = {
    position: 'absolute',
    transform: isMaximized ? `translate(0px, 0px)` : `translate(${nextLeft}px, ${nextTop}px)`,
    width: isMaximized ? maximizedSize.width : nextWidth,
    height: isMaximized ? maximizedSize.height : nextHeight,
    minWidth: '200px',
    minHeight: '30px',
    border: isMaximized ? 'none' : '5px solid rgba(0, 0, 0, 0)',
    display: isMinimized ? 'none' : 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    cursor: resizeMode ? `${resizeMode}-resize` : 'default',
    transition: isMaximized ? '0.5s' : 'none',
    zIndex: zIndex,
  };

  useEffect(() => {
    const currentSize = {
      width: nextWidth,
      height: nextHeight,
    };

    const calSize = calSizeWhenWindowResize({ maximizedSize, size });
    if (calSize) {
      changeWindowSizeTotal(calSize);
    }

    const calLocation = calLocationWhenWindowResize({ maximizedSize, currentSize, location });
    if (calLocation) {
      changeWindowLocationTotal(calLocation);
    }
  }, [windowSize]);

  const addDragEvt = e => {
    document.addEventListener('mouseup', removeDragEvt);
    document.addEventListener('mousemove', dragEvt);
  };

  const removeDragEvt = () => {
    changeWindowLocation({ location: { top: calNextTop(), left: calNextLeft() }, target: type });
    document.removeEventListener('mouseup', removeDragEvt);
    document.removeEventListener('mousemove', dragEvt);
  };

  const dragEvt = e => {
    const { height: maxHeight, width: maxWidth } = maximizedSize;
    let topMax = maxHeight - boxRef.current.scrollHeight;
    let leftMax = maxWidth - boxRef.current.scrollWidth;
    setNextTop(calNextTop(e.movementY, topMax, location.top));
    setNextLeft(calNextLeft(e.movementX, leftMax, location.left));
  };

  const addResizeEvt = e => {
    document.addEventListener('mousemove', resizeEvt);
    document.addEventListener('mouseup', removeResizeEvt);
    document.body.style.cursor = `${resizeMode}-resize`;
    setIsResizing(true);
  };

  const removeResizeEvt = () => {
    changeWindowSize({
      size: { width: calNextWidth(), height: calNextHeight() },
      target: type,
    });
    changeWindowLocation({ location: { top: calNextTop(), left: calNextLeft() }, target: type });
    document.removeEventListener('mouseup', removeResizeEvt);
    document.removeEventListener('mousemove', resizeEvt);
    document.body.style.cursor = 'default';
    setIsResizing(false);
  };

  const resizeEvt = e => {
    const movement = { moveX: calMoveX(e.movementX), moveY: calMoveY(e.movementY) };
    const currentLocation = { currentBottom: location.top + size.height, currentRight: location.left + size.width };
    const maximizedSize = calMaximizedSize(windowSize);
    const currentSize = { ...size };

    const nextSize = calSizeWhenResizing({
      movement,
      currentLocation,
      location,
      resizeMode,
      maximizedSize,
      currentSize,
    });

    setNextWidth(calNextWidth(nextSize.width));
    setNextHeight(calNextHeight(nextSize.height));

    let nextLocation = calLocationWhenResizing({ movement, currentLocation, location, resizeMode });

    if (!nextLocation) {
      nextLocation = { ...location };
    }

    setNextTop(calNextTop(nextLocation.top));
    setNextLeft(calNextLeft(nextLocation.left));
  };

  const changeResizeMode = e => {
    const isOnStartSide = value => {
      return value >= 0 && value < 5;
    };
    const isOnEndSide = (value, limit) => {
      return value > limit + 5 && value < limit + 10;
    };

    const x = e.clientX - location.left;
    const y = e.clientY - location.top;
    let resizeType = '';

    if (isOnStartSide(y)) {
      resizeType += 'n';
    } else if (isOnEndSide(y, size.height)) {
      resizeType += 's';
    }

    if (isOnStartSide(x)) {
      resizeType += 'w';
    } else if (isOnEndSide(x, size.width)) {
      resizeType += 'e';
    }

    setResizeMode(resizeType);
  };

  return (
    <div
      style={divStyle}
      ref={boxRef}
      onMouseEnter={e => isResizing || changeResizeMode(e)}
      onMouseLeave={e => isResizing || setResizeMode(null)}
      onMouseDown={() => {
        focusOnWindow({ target: type });
        if (resizeMode === null) {
          return;
        }
        addResizeEvt();
      }}
    >
      {isLoading && (
        <StyledIsLoading>
          <ClockLoader size={150} color={'#fff'} />
        </StyledIsLoading>
      )}

      <StyledProgramBox
        onMouseEnter={e => isResizing || setResizeMode(null)}
        onMouseLeave={e => isResizing || changeResizeMode(e)}
      >
        <StyledProgramHeader>
          <StyledProgramTitle
            onMouseDown={e => addDragEvt(e)}
            onDoubleClick={() => {
              if (isMaximized) {
                releaseMaximizeWindow({ target: type });
              } else {
                maximizeWindow({ target: type });
              }
            }}
          >
            <Icon src={icon} width={15} height={15}></Icon>
            <Paragraph text={text} margin={'0 0 0 10px'} color={'black'}></Paragraph>
          </StyledProgramTitle>
          <StyledTabResizeTab>
            <Button
              text={'ㅡ'}
              color={'black'}
              hover={'#999'}
              onclick={() => minimizeWindow({ target: type })}
            ></Button>
            {isMobile ? (
              ''
            ) : isMaximized ? (
              <Button
                text={`\u29C9`}
                color={'black'}
                hover={'#999'}
                letterSpacing={'0.1px'}
                onclick={() => releaseMaximizeWindow({ target: type })}
              ></Button>
            ) : (
              <Button
                text={`\u25FB`}
                color={'black'}
                hover={'#999'}
                onclick={() => maximizeWindow({ target: type })}
              ></Button>
            )}
            <Button
              text={'X'}
              color={'black'}
              hover={'#fe2d2d'}
              onclick={() => closeProgram({ target: type })}
            ></Button>
          </StyledTabResizeTab>
        </StyledProgramHeader>
        <StyledProgramContent>
          <Content padding={isMaximized ? 'none' : '30px;'} isMobileView={isMobileView}></Content>
        </StyledProgramContent>
      </StyledProgramBox>
    </div>
  );
};

export default ProgramBox;
