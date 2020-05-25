import styled from "styled-components";

export const Tooltip = styled.span`
  top: 15px;
  z-index: 9;
  opacity: 0;
  height: 33px;
  display: flex;
  right: 0.75rem;
  color: ${props => props.theme.color.tooltip.font};
  font-size: 0.75em;
  padding: 0 0.75em;
  border-radius: 0.25em;
  background: ${props => props.theme.color.tooltip.background};
  position: absolute;
  white-space: nowrap;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  transition: all ease-in-out 250ms;

  &:hover {
    pointer-events: none;
  }
`;
