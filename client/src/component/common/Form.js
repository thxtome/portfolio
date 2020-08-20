import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form``;

const Form = forwardRef(({ children }, ref) => {
  return <StyledForm ref={ref}>{children}</StyledForm>;
});

export default Form;
