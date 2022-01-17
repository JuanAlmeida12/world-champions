import styled, { css } from "styled-components";

export const LoaderContainer = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
  ${(props) =>
    !props.active &&
    css`
      pointer-events: none;
    `}
`;

export const LoaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
  text-transform: uppercase;
  letter-spacing: 10px;
`;
