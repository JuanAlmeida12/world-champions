import styled from "styled-components";
import RedBt from "assets/bt_red.png";

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 150px;
    margin: 5px;
  }
`;

export const CloseButton = styled.button`
  padding: 10px;
  width: 200px;
  width: 90px;
  background: transparent;
  border: none;
  background-image: url(${RedBt});
  background-size: cover;
  font-family: "PixaletedFont";
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
