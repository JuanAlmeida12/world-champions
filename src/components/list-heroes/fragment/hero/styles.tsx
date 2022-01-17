import styled, { css } from "styled-components";

interface CardContainerProps {
  selectable?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: 150px;
  height: 250px;
  position: relative;
  display: block;
  margin: 10px;

  ${(props) =>
    props.selectable &&
    css`
      cursor: pointer;
      user-select: none;
    `}

  & > #heroImage {
    width: 100%;
  }

  & > #card {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    object-fit: contain;
  }

  & > h3 {
    position: absolute;
    font-size: 10px;
    text-transform: uppercase;
    padding: 5px;
    text-align: center;
    width: 100%;
    z-index: 2;
    bottom: 10%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 300ms;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
