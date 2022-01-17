import styled from "styled-components";

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  & > div {
    flex-basis: 50%;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StatsBall = styled.img`
  width: 20px;
`;
