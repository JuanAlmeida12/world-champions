import styled from "styled-components";

export const BattleContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
`;

export const HeroesContainer = styled.div`
  flex-basis: 50%;
  order: 2;
  height: 530px;
  @media (max-width: 800px) {
    flex-basis: 50%;
    order: 2;
    height: 400px;
  }
`;

export const Player = styled.div`
  flex-basis: 25%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 50%;
  }
`;

export const PlayerOne = styled(Player)`
  order: 1;
  @media (max-width: 800px) {
    flex-basis: 50%;
  }
`;
export const Painel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlayerTwo = styled(Player)`
  order: 3;
  @media (max-width: 800px) {
    flex-basis: 50%;
    order: 1;
  }
`;
