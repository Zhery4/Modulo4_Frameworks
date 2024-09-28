import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { HomeScene } from "../../scenes/Home/Home.scene";
import { switchRoutes } from "./routes";

export const RouterComponent = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={switchRoutes.root} element={<HomeScene />} />
        </Routes>
      </BrowserRouter>
    );
  };