import axios, { AxiosInstance } from "axios";
import { Hero } from "../../types/hero";
import { API } from "constantes/api";

export class HeroService {
  http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: API.baseUrl.replace(
        "{{token}}",
        process.env.REACT_APP_HERO_KEY || ""
      ),
    });
  }
  async getHeroList(search: string): Promise<Hero[]> {
    const result = await this.http.get<{ results: Hero[] }>(
      `${API.search}/${search}`,
      {}
    );
    return result.data.results || [];
  }

  async getHeroById(id: string): Promise<Hero> {
    const result = await this.http.get<Hero>(
      API.heroByID.replace("{{id}}", id),
      {}
    );
    return result.data;
  }
}
