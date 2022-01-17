import React from "react";

import { Sprite, Container } from "./styles";
import SpritePNG from "assets/spriteRun.png";

export const RunSprite = () => {
  return (
    <Container>
      <Sprite src={SpritePNG} />
    </Container>
  );
};
