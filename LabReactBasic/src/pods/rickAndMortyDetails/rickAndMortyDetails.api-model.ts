import { ICommonObject } from "../rickAndMorty/rickAndMorty.api-model";

export interface IRickAndMortyDetailsApiModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICommonObject;
  location: ICommonObject;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
