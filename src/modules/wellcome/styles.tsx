import styled from "styled-components";

export const WellcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BrandContainer = styled.div`
  width: 500px;
  position: absolute;
  top: 10%;
  left: calc(50% - 250px);
`;

export const StartButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  letter-spacing: 10px;
  text-shadow: 2px 2px #ff0000;
  color: white;
  position: absolute;
  bottom: 20%;
  text-transform: uppercase;

  & > span {
    cursor: pointer;
  }
`;
