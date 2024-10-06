import { useState } from "react";
import { RickAndMortyComponent } from "./rickAndMorty.component";
import { ICharacter } from "./rickAndMorty.vm";
import emotionStyled from "@emotion/styled";

const SContent = emotionStyled.div`
  display: flex;
  flex-direction: column;  
  gap: 20px;
`;

export const RickAndMortyContainer = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  return (
    <SContent>
      <RickAndMortyComponent
        charactersList={characters}
        setCharacters={setCharacters}
      />
    </SContent>
  );
};
