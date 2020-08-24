const MIN_WIDTH = 320;
const MIN_HEIGHT = 30;

const minMaxOrValue = (min, max, value) => {
  return value < min ? min : value > max ? max : value;
};

const calSizeWhenWindowResize = ({
  maximizedSize: { width: maxWidth, height: maxHeight },
  size: { width: prevWidth, height: prevHeight },
}) => {
  if (maxHeight < prevHeight || maxWidth < prevWidth) {
    return {
      width: minMaxOrValue(320, maxWidth, prevWidth),
      height: minMaxOrValue(30, maxHeight, prevHeight),
    };
  }

  return null;
};

const calLocationWhenWindowResize = ({
  maximizedSize: { width: maxWidth, height: maxHeight },
  currentSize: { width: currentWidth, height: currentHeight },
  location: { top, left },
}) => {
  let restTop = maxHeight - currentHeight;
  let restLeft = maxWidth - currentWidth;
  if (restTop < top || restLeft < left) {
    let nextTop = minMaxOrValue(0, top, restTop);
    let nextLeft = minMaxOrValue(0, left, restLeft);
    return { top: nextTop, left: nextLeft };
  }

  return null;
};

const calSizeWhenResizing = ({
  movement: { moveX, moveY },
  currentLocation: { currentBottom, currentRight },
  location: { left, top },
  resizeMode,
  maximizedSize: { width: maxWidth, height: maxHeight },
  currentSize: { width: nextWidth, height: nextHeight },
}) => {
  let currentMaximumWidth;
  let currentMaximumHeight;

  const eastMaximumWidth = maxWidth - left - 8;
  const southMaximumHeight = maxHeight - top - 5;

  switch (resizeMode) {
    case 'e':
      nextWidth += moveX;
      currentMaximumWidth = eastMaximumWidth;
      break;

    case 'w':
      nextWidth -= moveX;
      currentMaximumWidth = currentRight;
      break;

    case 's':
      nextHeight += moveY;
      currentMaximumHeight = southMaximumHeight;
      break;

    case 'n':
      nextHeight -= moveY;
      currentMaximumHeight = currentBottom;
      break;

    case 'ne':
      nextWidth += moveX;
      nextHeight -= moveY;
      currentMaximumWidth = eastMaximumWidth;
      currentMaximumHeight = currentBottom;
      break;

    case 'nw':
      nextWidth -= moveX;
      nextHeight -= moveY;
      currentMaximumWidth = currentRight;
      currentMaximumHeight = currentBottom;
      break;

    case 'sw':
      nextWidth -= moveX;
      nextHeight += moveY;
      currentMaximumWidth = currentRight;
      currentMaximumHeight = southMaximumHeight;
      break;

    case 'se':
      nextWidth += moveX;
      nextHeight += moveY;
      currentMaximumWidth = eastMaximumWidth;
      currentMaximumHeight = southMaximumHeight;
    default:
      break;
  }

  return {
    width: minMaxOrValue(MIN_WIDTH, currentMaximumWidth, nextWidth),
    height: minMaxOrValue(MIN_HEIGHT, currentMaximumHeight, nextHeight),
  };
};

const calLocationWhenResizing = ({
  movement: { moveX, moveY },
  currentLocation: { currentRight, currentBottom },
  location: { left, top },
  resizeMode,
}) => {
  let minLeft = currentRight - MIN_WIDTH;
  let maxTop = currentBottom - MIN_HEIGHT;

  switch (resizeMode) {
    case 'w':
    case 'sw':
      return {
        top,
        left: minMaxOrValue(0, minLeft, left + moveX),
      };

    case 'n':
      return {
        top: minMaxOrValue(0, maxTop, top + moveY),
        left,
      };

    case 'nw':
      return {
        top: minMaxOrValue(0, maxTop, top + moveY),
        left: minMaxOrValue(0, minLeft, left + moveX),
      };

    case 'ne':
      return { top: minMaxOrValue(0, maxTop, top + moveY), left };
  }

  return null;
};

export {
  minMaxOrValue,
  calSizeWhenWindowResize,
  calLocationWhenWindowResize,
  calSizeWhenResizing,
  calLocationWhenResizing,
};
