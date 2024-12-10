import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./CardList.style.css";

interface ICardList {
  id: string | number;
  name: string;
  image: string;
}

interface ICardListProps {
  details: ICardList;
  apiRoute: string;
}

export const CardList: React.FC<ICardListProps> = ({ details, apiRoute }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    apiRoute === "detail"
      ? navigate(`/${apiRoute}/${details.name}`)
      : navigate(`/${apiRoute}/${details.id}`);
  };
  return (
    <Card className="Card-List" key={details.id}>
      <CardMedia
        component="img"
        image={details.image}
        alt={details.name}
        className="Card-List-Image"
      />
      <CardContent className="Card-Content">
        <Typography variant="h5">{details.name}</Typography>
        <Button
          onClick={handleNavigation}
          variant="contained"
          color="secondary"
        >
          Details
        </Button>
      </CardContent>
    </Card>
  );
};
