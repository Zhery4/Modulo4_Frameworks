import { IRickAndMortyDetailsApiModel } from "./rickAndMortyDetails.api-model";
import { IRickAndMortyDetailsVm } from "./rickAndMortyDetails.vm";

export const mapCharacterListFromApiToVm = (
  character: IRickAndMortyDetailsApiModel
): IRickAndMortyDetailsVm => {
  const mapped = {
    id: character.id,
    name: character.name,
    image: character.image,
    species: character.species,
    status: character.status,
    origin: character.origin.name,
    location: character.location.name,
    episodes: character.episode,
  } as IRickAndMortyDetailsVm;
  return mapped;
};
