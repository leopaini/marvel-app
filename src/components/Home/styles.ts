import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  padding: 5em 4.5em;
  box-sizing: border-box;
  transition: background-color linear 150ms;
  background-color: ${props => props.theme.color.background};
`;

export const Message = styled.p`
  margin: 0;
  font-size: 2em;
  line-height: 1.5;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.color.message};
  transition: color linear 150ms;
`;
