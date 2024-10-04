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
import { useDebounce } from "../../common/hooks";
import { getFilteredCharacter } from "./rickAndMorty.api";
import { mapCharacterListFromApiToVm } from "./rickAndMorty.mapper";
import { useNavigate } from "react-router-dom";

interface IRickAndMortyProps {
  charactersList: ICharacter[];
  setCharacters: (characters: ICharacter[]) => void;
}

const SCardContinaer = emotionStyled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RickAndMortyComponent = (props: IRickAndMortyProps) => {
  const { charactersList, setCharacters } = props;
  const navigate = useNavigate();
  const [searchList, setSearchList] = useState<ICharacter[]>([]);
  const [form, setForm] = useState({ search: "" });

  const debouncedSearchTerm = useDebounce(form.search, 300);

  const handleChange = (e: any) => {
    setForm({ ...form, search: e.target.value });
  };

  const handleSearch = (e: any) => {
    getFilteredCharacter(debouncedSearchTerm).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    getFilteredCharacter(debouncedSearchTerm).then((response) => {
      console.log(response);
      setSearchList(mapCharacterListFromApiToVm(response.data.results));
    });
  }, [debouncedSearchTerm]);

  return (
    <>
      <div>
        {" "}
        <Typography variant="h4">Rick and Morty Characters</Typography>
      </div>
      <div>
        <div>
          <form onSubmit={handleSearch}>
            <Input value={form.search} onChange={handleChange} />
            <Button type="submit">Search</Button>
          </form>
        </div>
        <SCardContinaer>
          {searchList?.map((character: ICharacter) => {
            return (
              <Card key={character.id}>
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
      </div>
    </>
  );
};
