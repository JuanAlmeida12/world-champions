export type Hero = {
  id: string;
  name: string;
  image: {
    url: string;
  };
  powerstats: Powerstats;
  biography?: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance?: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    "eye-color": string;
    "hair-color": string;
  };
  work?: {
    occupation: string;
    base: string;
  };
  connections?: {
    "group-affiliation": string;
    relatives: string;
  };
};

interface Powerstats {
  intelligence: string | null;
  strength: string | null;
  speed: string | null;
  combat: string | null;
  durability: string | null;
  power: string | null;
}
