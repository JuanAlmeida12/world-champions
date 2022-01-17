import { Hero } from "../../../types/hero";

export interface ListHeroesProps {
  heroes: Hero[];
  onSelect?: (hero: Hero) => void;
}
