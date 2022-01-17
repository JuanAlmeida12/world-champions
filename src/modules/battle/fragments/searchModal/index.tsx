import React, { useState, useEffect } from "react";
import { includes, filter as ftFn, append, isEmpty } from "ramda";
import { Modal } from "components/modal";
import { selectFilters, setFilters, heroSearch } from "slices/hero";
import { useAppSelector, useAppDispatch } from "app/hooks";

import CombatBall from "assets/powerstats/combat_ball.png";
import IntBall from "assets/powerstats/intelligence_ball.png";
import PowerBall from "assets/powerstats/power_ball.png";
import SpeedBall from "assets/powerstats/speed_ball.png";
import DurabilityBall from "assets/powerstats/durability_ball.png";
import StrBall from "assets/powerstats/strength_ball.png";

import {
  StatsBall,
  FilterContainer,
  CloseButton,
  ApplyButton,
  TextBox,
  ModalContainer,
} from "./styles";

export const SearchModal = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const filter = useAppSelector(selectFilters);
  const [tmpFilters, setTmpFilters] = useState<string[]>(filter);
  const [search, setSearch] = useState<string>("");

  const handleFilterChange = (filter: string) => {
    if (includes(filter, tmpFilters)) {
      setTmpFilters(ftFn((value: string) => value !== filter, tmpFilters));
    } else {
      setTmpFilters(append(filter, tmpFilters));
    }
  };

  const handleClose = () => {
    setTmpFilters(filter);
    setOpen(false);
  };

  const handleApply = () => {
    dispatch(setFilters({ filters: tmpFilters }));
    if (!isEmpty(search)) dispatch(heroSearch(search));
    setOpen(false);
  };

  useEffect(() => {
    setTmpFilters(filter);
  }, [filter]);

  return (
    <div>
      <ApplyButton onClick={() => setOpen(true)}>Search</ApplyButton>
      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <TextBox
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h3>Filters</h3>
          <FilterContainer>
            <div>
              <input
                type="checkbox"
                id="scales"
                name="intelligence"
                checked={includes("intelligence", tmpFilters)}
                onChange={() => handleFilterChange("intelligence")}
              />
              <label>
                <StatsBall src={IntBall} />
                Intelligence
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="strength"
                name="strength"
                checked={includes("strength", tmpFilters)}
                onChange={() => handleFilterChange("strength")}
              />
              <label>
                <StatsBall src={StrBall} />
                Strength
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="combat"
                name="combat"
                checked={includes("combat", tmpFilters)}
                onChange={() => handleFilterChange("combat")}
              />
              <label>
                <StatsBall src={CombatBall} />
                Combat
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="power"
                name="power"
                checked={includes("power", tmpFilters)}
                onChange={() => handleFilterChange("power")}
              />
              <label>
                <StatsBall src={PowerBall} />
                Power
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="speed"
                name="speed"
                checked={includes("speed", tmpFilters)}
                onChange={() => handleFilterChange("speed")}
              />
              <label>
                <StatsBall src={SpeedBall} />
                Speed
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="durability"
                name="durability"
                checked={includes("durability", tmpFilters)}
                onChange={() => handleFilterChange("durability")}
              />
              <label>
                <StatsBall src={DurabilityBall} />
                Durability
              </label>
            </div>
          </FilterContainer>
          <div>
            <ApplyButton onClick={handleApply}>Apply</ApplyButton>
            <CloseButton onClick={handleClose}>Close</CloseButton>
          </div>
        </ModalContainer>
      </Modal>
    </div>
  );
};
