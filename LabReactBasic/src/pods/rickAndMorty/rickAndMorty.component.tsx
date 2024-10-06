import {
  Button,
  Input,
  Typography,
} from "@mui/material";
import { ICharacter } from "./rickAndMorty.vm";
import {  useEffect, useState } from "react";
import emotionStyled from "@emotion/styled";
import { getFilteredCharacter } from "./rickAndMorty.api";
import { mapCharacterListFromApiToVm } from "./rickAndMorty.mapper";
import { useDebounce } from "@uidotdev/usehooks";
import CardList from "../../common/components/CardList/CardList.component";

interface IRickAndMortyProps {
  charactersList: ICharacter[];
  setCharacters: (characters: ICharacter[]) => void;
}

const SContainer = emotionStyled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

`;

const SForm = emotionStyled.form`
  align-self: center;
`;

const SCardContinaer = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  margin: 0 auto;
  justify-content: space-around;
`;

export const RickAndMortyComponent = (props: IRickAndMortyProps) => {
  const [searchList, setSearchList] = useState<ICharacter[]>([]);
  const [form, setForm] = useState({ search: "" });

  const debouncedSearchTerm = useDebounce(form.search, 300);

  const handleChange = (e: any) => {
    setForm({ ...form, search: e.target.value });
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    getFilteredCharacter(debouncedSearchTerm).then((response) => {});
  };

  useEffect(() => {
    getFilteredCharacter(debouncedSearchTerm).then((response) => {
      setSearchList(mapCharacterListFromApiToVm(response.data.results));
    });
  }, [debouncedSearchTerm]);

  return (
    <SContainer>
      <Typography variant="h4">Rick and Morty Characters</Typography>
      <SForm onSubmit={handleSearch}>
        <Input value={form.search} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </SForm>
      <SCardContinaer>
        {searchList?.map((character: ICharacter) => {
          return (
            <CardList 
              key={character.id} 
              details={{id: character.id, name: character.name, image: character.image}} 
              apiRoute="RaMdetail" />
          );
        })}
      </SCardContinaer>
    </SContainer>
  );
};
