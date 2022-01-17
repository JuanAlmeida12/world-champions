import React, { useCallback, useEffect } from "react";
import { isEmpty } from "ramda";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { ListHeroes } from "components/list-heroes";
import {
  heroSearch,
  selectHeros,
  selectStatus,
  setBattleHeroes,
  selectBattleHeroes,
} from "slices/hero";
import { close, selectStatus as selectLoadStatus } from "slices/loader";

import { Player } from "../../components/player";
import { BattleModal } from "./fragments/battleModal";
import { SearchModal } from "./fragments/searchModal";
import { Hero } from "../../../types/hero";
import {
  BattleContainer,
  HeroesContainer,
  PlayerOne,
  PlayerTwo,
  Painel,
} from "./styles";

export const Battle = () => {
  const dispatch = useAppDispatch();

  const heroes = useAppSelector(selectHeros);
  const status = useAppSelector(selectStatus);

  const loadStatus = useAppSelector(selectLoadStatus);

  const [player1, player2] = useAppSelector(selectBattleHeroes);

  const handleSelect = useCallback(
    async (hero: Hero) => {
      dispatch(setBattleHeroes({ hero }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(heroSearch("A"));
  }, [dispatch]);

  useEffect(() => {
    if (loadStatus === "loading" && (!isEmpty(heroes) || status === "idle"))
      setTimeout(() => dispatch(close()), 5000);
  }, [heroes, status, loadStatus, dispatch]);

  return (
    <BattleContainer>
      <PlayerOne>{player1 && <Player hero={player1} />}</PlayerOne>
      <HeroesContainer>
        <Painel>
          <BattleModal />
          <SearchModal />
        </Painel>
        <ListHeroes heroes={heroes} onSelect={handleSelect} />
      </HeroesContainer>
      <PlayerTwo>{player2 && <Player hero={player2} />}</PlayerTwo>
    </BattleContainer>
  );
};
