import styled from "styled-components";

export const NavBar = styled.nav`
  height: 66px;
  display: flex;
  padding: 0 1em;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.color.navbar};
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  all: unset;
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
