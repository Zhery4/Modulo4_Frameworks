import { Input, Typography } from "@mui/material";
import { ICharacter } from "./rickAndMorty.vm";
import { useEffect, useState } from "react";
import emotionStyled from "@emotion/styled";
import { getFilteredCharacter } from "./rickAndMorty.api";
import { mapCharacterListFromApiToVm } from "./rickAndMorty.mapper";
import { useDebounce } from "@uidotdev/usehooks";
import { CardList } from "../../common/components";

const SContainer = emotionStyled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;  
`;

const SCardContinaer = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const RickAndMortyComponent = () => {
  const [searchList, setSearchList] = useState<ICharacter[]>([]);
  const [form, setForm] = useState({ search: "" });

  const debouncedSearchTerm = useDebounce(form.search, 300);

  const handleChange = (e: any) => {
    setForm({ ...form, search: e.target.value });
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    getFilteredCharacter(debouncedSearchTerm).then((response) => {
      setSearchList(mapCharacterListFromApiToVm(response.data.results));
    });
  }, [debouncedSearchTerm]);

  return (
    <SContainer>
      <Typography variant="h4">Rick and Morty Characters</Typography>
      <form onSubmit={handleSearch}>
        <Input
          value={form.search}
          onChange={handleChange}
          placeholder="Search the Character"
        />
      </form>
      <SCardContinaer>
        {searchList?.map((character: ICharacter) => {
          return (
            <CardList
              key={character.id}
              details={{
                id: character.id,
                name: character.name,
                image: character.image,
              }}
              apiRoute="RaMdetail"
            />
          );
        })}
      </SCardContinaer>
    </SContainer>
  );
};
