import styled from "styled-components";

export const Thumb = styled.div`
  height: 270px;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme.color.card.background};
  transition: background linear 150ms;

  &::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    content: "";
    position: absolute;
    background: linear-gradient(
      50deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

export const Info = styled.div`
  z-index: 1;
  height: 100%;
  padding: 1em;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  height: calc(100% - 270px);
  background-color: ${props => props.theme.color.card.background};

  &::before {
    left: 0;
    z-index: -1;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: calc(-100% + 4px);
    background-color: ${props => props.theme.color.card.effect};
    transition: transform ease-in-out 250ms;
  }

  &::after {
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;

    border-style: solid;
    border-width: 1.5em 1.5em 0 0;
    border-color: transparent ${props => props.theme.color.background} transparent
      transparent;
    transition: border-color linear 150ms;
  }
`;

export const Name = styled.p`
  margin: 0;
  opacity: 0.8;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${props => props.theme.color.card.font};
  transition: all linear 250ms;
`;
