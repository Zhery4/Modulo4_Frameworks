import { Route, Routes } from "react-router-dom";
import { HomeScene } from "../../scenes/Home/Home.scene";
import { switchRoutes } from "./routes";
import DetailScene from "../../scenes/Details/Detail.scene";
import { RickAndMortyScene } from "../../scenes/RickAndMorty/rickAndMorty.scene";
import RickAndMortyDetailsScene from "../../scenes/RickAndMortyDetails/rickAndMortyDetails.scene";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path={switchRoutes.root} element={<HomeScene />} />
      <Route path={switchRoutes.details} element={<DetailScene />} />
      <Route path={switchRoutes.rickAndMorty} element={<RickAndMortyScene />} />
      <Route
        path={switchRoutes.rickAndMortyDetails}
        element={<RickAndMortyDetailsScene />}
      />
    </Routes>
  );
};
