import React from "react";
import { isNil } from "ramda";

import { PowerstatsProps } from "./powerstats.props";
import CombatBall from "assets/powerstats/combat_ball.png";
import IntBall from "assets/powerstats/intelligence_ball.png";
import PowerBall from "assets/powerstats/power_ball.png";
import SpeedBall from "assets/powerstats/speed_ball.png";
import DurabilityBall from "assets/powerstats/durability_ball.png";
import StrBall from "assets/powerstats/strength_ball.png";

import { Stats, StatsBall } from "./styles";

export const PlayerPowestats = ({ hero }: PowerstatsProps) => {
  if (isNil(hero)) return null;
  return (
    <div>
      <Stats>
        <StatsBall src={IntBall} />
        <span>Intelligence: {hero.powerstats.intelligence}</span>
      </Stats>
      <Stats>
        <StatsBall src={StrBall} />
        <span>Strength: {hero.powerstats.strength}</span>
      </Stats>
      <Stats>
        <StatsBall src={CombatBall} />
        <span>Combat: {hero.powerstats.combat}</span>
      </Stats>
      <Stats>
        <StatsBall src={DurabilityBall} />
        <span>Durability: {hero.powerstats.durability}</span>
      </Stats>
      <Stats>
        <StatsBall src={PowerBall} />
        <span>Power: {hero.powerstats.power}</span>
      </Stats>
      <Stats>
        <StatsBall src={SpeedBall} />
        <span>Speed: {hero.powerstats.speed}</span>
      </Stats>
    </div>
  );
};

export { StatsContainer } from "./styles";
