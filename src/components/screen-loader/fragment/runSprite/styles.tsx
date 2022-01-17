import styled, { keyframes } from "styled-components";

const AnimationSprite = keyframes`
  from {
    transform: translate3d(0px, 0, 0);
  };

  to {
    transform: translate3d(-100%, 0, 0);
  }
`;

export const Container = styled.div`
  width: 35px;
  height: 40px;
  overflow: hidden;
`;

export const Sprite = styled.img`
  animation: ${AnimationSprite} 1s steps(6) infinite;
`;
