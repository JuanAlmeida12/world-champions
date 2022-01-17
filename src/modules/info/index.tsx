import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { heroByID, selectHero } from "slices/hero";
import { Player } from "components/player";
import { isNil } from "ramda";
import { PlayerPowestats } from "components/powerstats";

import {
  InfoContainer,
  InfoContent,
  ImageContainer,
  BasicInfo,
  NameInfo,
  Info as InfoDiv,
} from "./styles";

export const Info = () => {
  const dispatch = useAppDispatch();
  const hero = useAppSelector(selectHero);

  const { heroId = "" } = useParams();

  useEffect(() => {
    dispatch(heroByID(heroId));
  }, [dispatch, heroId]);

  if (isNil(hero)) return <>No data</>;

  return (
    <InfoContainer>
      <InfoContent>
        <BasicInfo>
          <ImageContainer>
            <Player hero={hero} seeMore={false} />
          </ImageContainer>
          <NameInfo>
            <h1>{hero.name}</h1>
            <span>{hero.biography?.["full-name"]}</span>
          </NameInfo>
        </BasicInfo>
        <InfoDiv>
          <h2>Infos</h2>
          <h3>Biography</h3>
          <div>
            <strong>Alter egos: </strong>
            {hero.biography?.["alter-egos"]}
          </div>
          <div>
            <strong>Alignment:</strong> {hero.biography?.alignment}
          </div>
          <div>
            <strong>First Appearance:</strong>{" "}
            {hero.biography?.["first-appearance"]}
          </div>
          <div>
            <strong>Place Of Birth:</strong>{" "}
            {hero.biography?.["place-of-birth"]}
          </div>
          <div>
            <strong>Aliases:</strong> {hero.biography?.aliases}
          </div>
          <div>
            <strong>Publisher:</strong> {hero.biography?.publisher}
          </div>
          <h3>Connections</h3>
          <div>
            <strong>Group Affiliation:</strong>{" "}
            {hero.connections?.["group-affiliation"]}
          </div>
          <div>
            <strong>Relatives:</strong> {hero.connections?.relatives}
          </div>
          <h3>Work</h3>
          <div>
            <strong>Base:</strong> {hero.work?.base}
          </div>
          <div>
            <strong>Occupation:</strong> {hero.work?.occupation}
          </div>
          <h3>Appearance</h3>
          <div>
            <strong>Eye Color:</strong> {hero.appearance?.["eye-color"]}
          </div>
          <div>
            <strong>Gender:</strong> {hero.appearance?.gender}
          </div>
          <div>
            <strong>Hair Color:</strong> {hero.appearance?.["hair-color"]}
          </div>
          <div>
            <strong>Height:</strong> {hero.appearance?.height}
          </div>
          <div>
            <strong>Race:</strong> {hero.appearance?.race}
          </div>
          <div>
            <strong>Weight:</strong> {hero.appearance?.weight}
          </div>
          <h3>Powerstats</h3>
          <PlayerPowestats hero={hero} />
        </InfoDiv>
      </InfoContent>
    </InfoContainer>
  );
};
