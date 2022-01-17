import React, { useCallback, useMemo } from "react";

import { Hero } from "./fragment/hero";
import { ListHeroesProps } from "./list-heroes.props";
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
  AutoSizer,
} from "react-virtualized";

import { ListHeroContainer, HeroesContainer } from "./styles";

const CARD_WIDTH = 170;

const cache = new CellMeasurerCache({
  defaultHeight: 250,
  defaultWidth: CARD_WIDTH,
  fixedWidth: true,
});

export const ListHeroes = ({ heroes, onSelect }: ListHeroesProps) => {
  const cellPositioner = (columnCount: number) =>
    createMasonryCellPositioner({
      cellMeasurerCache: cache,
      columnCount,
      columnWidth: 150,
      spacer: 10,
    });

  const cellRenderer = useCallback(
    ({ index, key, parent, style }: any) => {
      return (
        <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
          <div style={style}>
            <Hero hero={heroes[index]} onSelect={onSelect} />
          </div>
        </CellMeasurer>
      );
    },
    [heroes, onSelect]
  );

  const calculateWidth = useCallback((width: number): number => {
    const widthPerCard = Math.floor(width / CARD_WIDTH);
    return widthPerCard * CARD_WIDTH;
  }, []);

  return useMemo(
    () => (
      <ListHeroContainer>
        {heroes.length === 0 && "No Data"}
        <AutoSizer>
          {({ height, width }) => (
            <HeroesContainer show={heroes.length > 0}>
              <Masonry
                cellCount={heroes.length}
                cellMeasurerCache={cache}
                cellPositioner={cellPositioner(Math.floor(width / CARD_WIDTH))}
                cellRenderer={cellRenderer}
                height={height}
                width={calculateWidth(width)}
                autoHeight={false}
              />
            </HeroesContainer>
          )}
        </AutoSizer>
      </ListHeroContainer>
    ),
    [cellRenderer, heroes.length, calculateWidth]
  );
};
