import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  members: string;
  details: string;
  rickAndMorty: string;
  rickAndMortyDetails: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  members: "/members",
  details: "/detail/:id",
  rickAndMorty: "/RickAndMorty",
  rickAndMortyDetails: "/RaMdetail/:id",
};

interface Routes extends Omit<SwitchRoutes, "details" | "rickAndMortyDetails"> {
  details: (id: string) => string;
  rickAndMortyDetails: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  details: (id) => generatePath(switchRoutes.details, { id }),
  rickAndMortyDetails: (id) =>
    generatePath(switchRoutes.rickAndMortyDetails, { id }),
};
