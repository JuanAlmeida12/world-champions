import React, { useState } from "react";
import { Modal } from "components/modal";
import { selectBattleHeroes } from "slices/hero";
import { useAppSelector } from "app/hooks";
import { PlayerPowestats, StatsContainer } from "components/powerstats";

import { Player } from "../../../../components/player";
import { ImageContainer, CloseButton, ModalContainer } from "./styles";

export const BattleModal = () => {
  const [open, setOpen] = useState(false);

  const [player1, player2] = useAppSelector(selectBattleHeroes);

  return (
    <div>
      <CloseButton onClick={() => setOpen(true)}>Battle</CloseButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContainer>
          <ImageContainer>
            {player1 && <Player hero={player1} seeMore={false} />}
            {player2 && <Player hero={player2} seeMore={false} />}
          </ImageContainer>
          <StatsContainer>
            {player1 && <PlayerPowestats hero={player1} />}
            {player2 && <PlayerPowestats hero={player2} />}
          </StatsContainer>
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </ModalContainer>
      </Modal>
    </div>
  );
};
