import { Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  DetailScene,
  HomeScene,
  RickAndMortyDetailsScene,
  RickAndMortyScene,
} from "../../scenes";

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
