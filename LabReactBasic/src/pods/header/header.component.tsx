import emotionStyled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SNav = emotionStyled.nav`
    display: flex;
    gap: 20px;
    margin-left: auto;
`;

const SAppBar = emotionStyled(AppBar)`

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding: 10px;    
`;

export const HeaderComponent = () => {
  return (
    <SAppBar color="inherit">
      <Typography variant="h6">Laboratorio React</Typography>
      <Button color="secondary" variant="contained" component={Link} to="/">
        Github Members
      </Button>
      <Button
        color="success"
        variant="contained"
        component={Link}
        to="/RickAndMorty"
      >
        Rick And Morty
      </Button>
    </SAppBar>
  );
};
