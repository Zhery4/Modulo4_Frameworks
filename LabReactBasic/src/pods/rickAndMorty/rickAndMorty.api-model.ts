export interface IRickAndMortyApiModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICommonObject;
  location: ICommonObject;
  image: string;
  episode: string[]; // Array of episode URLs
  url: string;
  created: string;
}

export interface ICommonObject {
  name: string;
  url: string;
}
