import { useEffect, useState } from "react";
import { getRickAndMortyCharactersDetails } from "./rickAndMortyDetails.api";
import { IRickAndMortyDetailsVm } from "./rickAndMortyDetails.vm";
import { mapCharacterListFromApiToVm } from "./rickAndMortyDetails.mapper";
import RickAndMortyDetailsComponent from "./rickAndMortyDetails.component";

interface IRickAndMortyDetailsContainerProps {
  charachterId: string | number;
}

const RickAndMortyDetailsContainerComponent = (
  props: IRickAndMortyDetailsContainerProps
) => {
  const { charachterId } = props;
  const [character, setCharacter] = useState<IRickAndMortyDetailsVm | null>(
    null
  );

  useEffect(() => {
    getRickAndMortyCharactersDetails(charachterId as number).then(
      (response) => {
        const apiModel = response.data;
        setCharacter(mapCharacterListFromApiToVm(apiModel));
      }
    );
  }, []);

  return <RickAndMortyDetailsComponent character={character!} />;
};

export default RickAndMortyDetailsContainerComponent;
