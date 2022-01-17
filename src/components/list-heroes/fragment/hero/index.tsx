import React, { useMemo, useCallback } from "react";

import { HeroProp } from "./hero.props";
import { isNil } from "ramda";

import { getHeroPowerStats } from "helpers/getHeroPowerStats";
import { CardContainer } from "./styles";

import CombatCard from "assets/cards/combat_card.png";
import IntCard from "assets/cards/intelligence_card.png";
import PowerCard from "assets/cards/power_card.png";
import SpeedCard from "assets/cards/speed_card.png";
import DurabilityCard from "assets/cards/durability_card.png";
import StrCard from "assets/cards/strength_card.png";
import { ImageLoader } from "components/image-loader";

import NoImage from "assets/no-image.png";

export const Hero = ({ hero, onSelect }: HeroProp) => {
  const powerStats = getHeroPowerStats(hero);

  let cardimage;

  switch (powerStats) {
    case "intelligence":
      cardimage = IntCard;
      break;
    case "strength":
      cardimage = StrCard;
      break;
    case "speed":
      cardimage = SpeedCard;
      break;
    case "durability":
      cardimage = DurabilityCard;
      break;
    case "combat":
      cardimage = CombatCard;
      break;
    case "power":
      cardimage = PowerCard;
      break;
    default:
      cardimage = CombatCard;
      break;
  }

  const selectable = useMemo(() => !isNil(onSelect), [onSelect]);

  const handleSelect = useCallback(
    () => !isNil(onSelect) && onSelect(hero),
    [hero, onSelect]
  );

  if (isNil(hero)) return null;

  return (
    <CardContainer onClick={handleSelect} selectable={selectable}>
      <ImageLoader
        id="heroImage"
        src={hero.image.url}
        alt="card"
        erroImage={NoImage}
      />
      <ImageLoader id="card" src={cardimage} alt="heroImage" />
      <h3>{hero.name}</h3>
    </CardContainer>
  );
};
