import { Hero } from "../../../../../types/hero";

export interface HeroProp {
  hero: Hero;
  onSelect?: (hero: Hero) => void;
}
