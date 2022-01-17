import styled from "styled-components";

import RedBt from "assets/bt_red.png";
import BlueBt from "assets/bt_blue.png";
import TextBoxBg from "assets/textbox.png";

export const StatsBall = styled.img`
  width: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > div {
    flex-basis: 50%;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 200px;
  width: 90px;
  background: transparent;
  border: none;
  background-size: cover;
  font-family: "PixaletedFont";
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 3px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const TextBox = styled.input`
  background: transparent;
  border: none;
  background-image: url(${TextBoxBg});
  font-family: "PixaletedFont";
  height: 30px;
  width: 200px;
  background-size: cover;
  font-size: 16px;
  padding: 10px 60px 5px 10px;
`;

export const CloseButton = styled(Button)`
  background-image: url(${RedBt});
`;

export const ApplyButton = styled(Button)`
  background-image: url(${BlueBt});
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
