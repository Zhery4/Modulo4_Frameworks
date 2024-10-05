import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Input,
  Typography,
} from "@mui/material";
import { ICharacter } from "./rickAndMorty.vm";
import { ChangeEvent, useEffect, useState } from "react";
import emotionStyled from "@emotion/styled";
import { getFilteredCharacter } from "./rickAndMorty.api";
import { mapCharacterListFromApiToVm } from "./rickAndMorty.mapper";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";

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
  const navigate = useNavigate();
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
            <Card key={character.id} sx={{ width: "200px" }}>
              <CardMedia
                component="img"
                height={140}
                image={character.image}
                alt={character.name}
              />
              <CardContent>
                <Typography variant="h5">{character.name}</Typography>
                <Typography variant="body1">{character.species}</Typography>
                <Typography variant="body1">{character.status}</Typography>
                <Button
                  onClick={(e) => {
                    navigate(`/RaMdetail/${character.id}`);
                  }}
                >
                  Details
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </SCardContinaer>
    </SContainer>
  );
};
