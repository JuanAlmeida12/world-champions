import styled from "styled-components";

import { animated } from "react-spring";

export const ModalContainer = styled(animated.div)`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #000000cf;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled(animated.div)`
  background-color: #a1887f;
  border-radius: 10px;
  height: auto;
  max-height: 50vh;
  overflow: auto;
  padding: 15px;
  border: 4px solid #000;
`;
