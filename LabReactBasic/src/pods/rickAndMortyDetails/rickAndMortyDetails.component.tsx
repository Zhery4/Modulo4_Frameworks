import { IRickAndMortyDetailsVm } from "./rickAndMortyDetails.vm";
import { Card, CardContent, Typography } from "@mui/material";

interface IRickAndMortyDetailsProps {
  character: IRickAndMortyDetailsVm;
}

const RickAndMortyDetailsComponent = (props: IRickAndMortyDetailsProps) => {
  const { character } = props;
  return (
    <div>
      {character && (
        <div>
          {" "}
          <img src={character.image} alt={character.name} />
          <Card sx={{ width: "1080px" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: {character.species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {character.status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Origin: {character.origin}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {character.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Episodes in: {character.episodes.length}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default RickAndMortyDetailsComponent;
