import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { HomeScene } from "../../scenes/Home/Home.scene";
import { switchRoutes } from "./routes";
import DetailScene from "../../scenes/Details/Detail.scene";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.details} element={<DetailScene />} />
      </Routes>
    </BrowserRouter>
  );
};
