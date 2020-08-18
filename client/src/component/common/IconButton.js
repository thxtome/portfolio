import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const StyledIconButton = styled.div`
  width: ${props => (props.width ? props.width : '30px')};
  height: ${props => (props.height ? props.height : '30px')};
  background: ${props => (props.background ? props.background : 'none')};
  border: ${props => (props.border ? props.border : 'none')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 'none')};

  &:focus {
    border: none;
    border-image-width: 0px;
    outline: ${props => (props.outline ? props.outline : 'none')};
    outline-radius: 4px;
    outline-style: ${props => (props.outline ? 'auto' : 'none')};
  }

  &:active {
    color: #999;
  }

  &:hover {
    cursor: pointer;
  }
`;

const IconButton = ({ src, onclick, ...rest }) => {
  return (
    <StyledIconButton {...rest} onClick={onclick ? onclick : () => {}}>
      <Icon src={src}></Icon>
    </StyledIconButton>
  );
};

export default IconButton;
