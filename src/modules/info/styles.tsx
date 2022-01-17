import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #c5afa6;
  border-radius: 10px;
  height: fit-content;
  overflow: auto;
  padding: 15px;
  border: 4px solid #000;
  @media (max-width: 800px) {
    flex-basis: 100%;
    order: 1;
  }
`;

export const ImageContainer = styled.div`
  display: block;
  width: 150px;
  @media (max-width: 800px) {
    order: 1;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Info = styled.div`
  overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

export const NameInfo = styled.div`
  flex-basis: 50%;
  margin: 15px 30px;
  padding: 15px 30px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  border-width: 0px 0px 0px 2px;
  border-style: solid;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  & > span {
    color: #8b7972;
  }

  @media (max-width: 800px) {
    padding: none;
    border: none;
    order: 2;
    margin: none;
  }
`;
