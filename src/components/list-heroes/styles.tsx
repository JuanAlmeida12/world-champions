import styled from "styled-components";

interface HeroesContainerProps {
  show?: boolean;
}
export const HeroesContainer = styled.div<HeroesContainerProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  & > div {
    background-color: #a1887f;
  }
`;

export const ListHeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 10px;
  background-color: #d7ccc8;
  border: 4px solid #000;
  border-radius: 2px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 2px 23px 8px -3px rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 30px;
    z-index: 2;
    background-color: #795548;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 2;
    background-color: #795548;
    box-shadow: 2px -23px 8px -3px rgba(0, 0, 0, 0.8);
  }
`;
