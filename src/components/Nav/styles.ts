import styled from "styled-components";

export const NavBar = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 66px;
  display: flex;
  padding: 0 1em;
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.color.navbar};
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  all: unset;
  width: 100%;
  margin-left: 1em;
  font-size: 1.25em;
  padding-left: 0.5em;
  transition: transform ease-in-out 250ms;
  color: ${props => props.theme.color.font};

  &:focus {
    transform: translateX(-1.5em);

    + i {
      opacity: 0;
    }
  }
`;

export const Icon = styled.i`
  z-index: 1;
  padding: 0.5em;
  cursor: pointer;
  font-size: 1.25em;
  position: relative;
  color: ${props => props.theme.color.icon};
  transition: color ease-in-out 200ms;

  &:hover {
    color: ${props => props.theme.color.font};
  }
`;

export const Vr = styled.span`
  width: 2px;
  height: 40px;
  margin: 0 0.5em;
  background: #eee;
  border-radius: 5em;
`;
