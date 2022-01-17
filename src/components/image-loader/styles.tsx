import styled from "styled-components";
import { animated } from "react-spring";

export const ImageLoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const SkelettonContainer = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
`;
