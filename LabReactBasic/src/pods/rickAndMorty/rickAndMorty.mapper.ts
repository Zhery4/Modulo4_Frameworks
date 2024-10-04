import { IRickAndMortyApiModel } from "./rickAndMorty.api-model";
import { ICharacter } from "./rickAndMorty.vm";

export const mapCharacterListFromApiToVm = (
  characterList: IRickAndMortyApiModel[]
): ICharacter[] => {
  console.log(characterList);
  return characterList.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
    species: character.species,
    status: character.status,
    origin: character.origin.name,
    location: character.location.name,
    gender: character.gender,
  }));
};
