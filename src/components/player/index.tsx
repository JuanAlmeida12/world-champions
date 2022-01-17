import React from "react";

import { ImageLoader } from "components/image-loader";
import { PlayerProps } from "./player.props";

import { PlayerContainer, HeroName, SeeMore } from "./styles";
import NoImage from "assets/no-image.png";
import { Link } from "react-router-dom";

export const Player = ({ hero, seeMore = true }: PlayerProps) => {
  return (
    <PlayerContainer>
      <ImageLoader src={hero.image.url} erroImage={NoImage} />{" "}
      <HeroName>
        <span>{hero.name}</span>
      </HeroName>
      {seeMore && (
        <SeeMore>
          <Link
            to={`/info/${hero.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>See More...</span>
          </Link>
        </SeeMore>
      )}
    </PlayerContainer>
  );
};
