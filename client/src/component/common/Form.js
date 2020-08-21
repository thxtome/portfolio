import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: ${props => (props.width ? props.width : '100%')};
`;

const Form = forwardRef(({ children, ...rest }, ref) => {
  return (
    <StyledForm ref={ref} {...rest}>
      {children}
    </StyledForm>
  );
});

export default Form;
