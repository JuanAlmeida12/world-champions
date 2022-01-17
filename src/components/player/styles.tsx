import styled from "styled-components";

export const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  border: 4px solid;
  border-radius: 4px;
  display: flex;
  padding: 5px;
  height: fit-content;
  background-color: #d7ccc8;
  box-shadow: 4px 5px 5px #000000;
`;

export const HeroName = styled.div`
  position: absolute;
  background-color: #8d6e63;
  bottom: 5%;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 4px 5px #000000;
  overflow: hidden;
  padding: 5px;

  & > span {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const SeeMore = styled.div`
  position: absolute;
  background-color: #d7ccc8;
  top: 5%;
  right: 0;
  width: 80px;
  display: flex;
  align-items: center;
  z-index: 2;
  justify-content: center;
  padding: 5px;
  box-shadow: 4px 5px #000000;
  transform: skew(-10deg);
  font-size: 12px;
  cursor: pointer;
  &:hover {
    transform: skew(-10deg) scale(1.1);
  }
  & > span {
    cursor: pointer;
  }
`;
