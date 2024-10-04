export interface IRickAndMortyApiModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[]; // Array of episode URLs
  url: string;
  created: string;
}

interface Location {
  name: string;
  url: string;
}
