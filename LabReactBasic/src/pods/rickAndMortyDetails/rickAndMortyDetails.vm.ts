import { ICharacter } from "../rickAndMorty/rickAndMorty.vm";

export interface IRickAndMortyDetailsVm extends ICharacter {
  episodes: string[];
}
