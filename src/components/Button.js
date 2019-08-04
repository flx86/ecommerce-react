import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  color: var(--clr-blue);
  background: white;
  padding: 0.2em 1.1em;
  text-transform: uppercase;
  font-size: 3.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  letter-spacing: -1px;
  transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    color: var(--clr-white);
    background: var(--clr-red);
  }

  &:active {
    transform: translateY(3px);
  }
`;

const Button = ({ title, size }) => {
  return <StyledButton>{title}</StyledButton>;
};

export default Button;
