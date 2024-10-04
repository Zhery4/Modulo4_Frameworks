import { useEffect, useState } from "react";
import { RickAndMortyComponent } from "./rickAndMorty.component";
import { getRickAndMortyCharacters } from "./rickAndMorty.api";
import { mapCharacterListFromApiToVm } from "./rickAndMorty.mapper";
import { ICharacter } from "./rickAndMorty.vm";

export const RickAndMortyContainer = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    getRickAndMortyCharacters(1).then((response) => {
      console.log(response);
      const mappedList = mapCharacterListFromApiToVm(response.data.results);
      setCharacters(mappedList);
    });
  }, []);

  return (
    <div>
      <RickAndMortyComponent
        charactersList={characters}
        setCharacters={setCharacters}
      />
    </div>
  );
};
