import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { getHeroPowerStats } from "helpers/getHeroPowerStats";
import { append, takeLast, take, filter, includes, isEmpty } from "ramda";
import { HeroService } from "services/heroService";
import { Hero } from "../../types/hero";

const heroService = new HeroService();

export interface HeroState {
  hero?: Hero;
  search: Hero[];
  filter: string[];
  status: "idle" | "loading" | "failed";
  battleHeroes: Hero[];
}

const initialState: HeroState = {
  search: [],
  filter: [],
  status: "idle",
  battleHeroes: [],
};

export const heroSearch = createAsyncThunk(
  "hero/search",
  async (search: string) => {
    const response = await heroService.getHeroList(search);
    return response;
  }
);

export const heroByID = createAsyncThunk(
  "hero/heroByID",
  async (id: string) => {
    const response = await heroService.getHeroById(id);
    return response;
  }
);

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setHero: (state, { payload: { hero } }: { payload: { hero: Hero } }) => {
      state.hero = hero;
    },
    setBattleHeroes: (
      state,
      { payload: { hero } }: { payload: { hero: Hero } }
    ) => {
      state.battleHeroes = takeLast(2, append(hero, state.battleHeroes));
    },
    setFilters: (
      state,
      { payload: { filters } }: { payload: { filters: string[] } }
    ) => {
      state.filter = filters;
      if (!isEmpty(state.filter)) {
        state.search = filter(
          (hero: Hero) => includes(getHeroPowerStats(hero), state.filter),
          state.search
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(heroSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(heroSearch.rejected, (state) => {
        state.status = "idle";
        state.search = [];
      })
      .addCase(heroSearch.fulfilled, (state, action) => {
        state.status = "idle";
        if (isEmpty(state.filter)) {
          state.search = action.payload;
        } else {
          state.search = filter(
            (hero: Hero) => includes(getHeroPowerStats(hero), state.filter),
            action.payload
          );
        }
        state.battleHeroes = take(2, action.payload);
      })
      .addCase(heroByID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(heroByID.rejected, (state) => {
        state.status = "idle";
        state.hero = undefined;
      })
      .addCase(heroByID.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.hero = payload;
      });
  },
});

export const { setHero, setBattleHeroes, setFilters } = heroSlice.actions;

export const selectHeros = (state: RootState) => state.hero.search;
export const selectHero = (state: RootState) => state.hero.hero;
export const selectFilters = (state: RootState) => state.hero.filter;
export const selectStatus = (state: RootState) => state.hero.status;
export const selectBattleHeroes = (state: RootState) => state.hero.battleHeroes;

export default heroSlice.reducer;
