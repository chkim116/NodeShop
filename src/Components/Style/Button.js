import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  padding: 0.5em 1.5em;
  background: #fab1a0;
  &:hover {
    background: #fab1a0;
  }
  & + & {
    margin-left: 1em;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
