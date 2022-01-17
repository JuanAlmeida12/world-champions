import { compose, isNil, last, map, prop, sortBy } from "ramda";
import { Hero } from "../../types/hero";

export const getHeroPowerStats = (hero: Hero): string => {
  if (isNil(hero)) return "";
  const toTransform = [
    { key: "intelligence", value: hero.powerstats.intelligence },
    { key: "strength", value: hero.powerstats.strength },
    { key: "speed", value: hero.powerstats.speed },
    { key: "durability", value: hero.powerstats.durability },
    { key: "power", value: hero.powerstats.power },
    { key: "combat", value: hero.powerstats.combat },
  ];

  const { key }: { key: string } = compose(
    last,
    sortBy(prop("value")),
    map(({ key, value }: any) => ({
      key,
      value: isNil(value) || value === "null" ? 0 : Number(value),
    }))
  )(toTransform) as { key: string };

  return key;
};
