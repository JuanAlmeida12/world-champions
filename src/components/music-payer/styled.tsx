import styled from "styled-components";

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  left: 5%;

  @media (max-width: 800px) {
    transform: scale(0.5);
    bottom: 0;
    left: 0;
  }
`;

export const PlayControll = styled.img`
  width: 50px;
  transition: 300ms;
  padding: 10px 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
