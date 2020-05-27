import styled from "styled-components";

export const Description = styled.div`
  padding: 0 2em;
  grid-area: description;
  font-family: "Montserrat", sans-serif;
  color: ${props => props.theme.color.comic.font};
  transition: color linear 150ms;
`;
