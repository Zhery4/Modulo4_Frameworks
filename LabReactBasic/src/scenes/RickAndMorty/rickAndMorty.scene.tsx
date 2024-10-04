import { AppLayout } from "../../layouts/app/App.layout";
import { RickAndMortyContainer } from "../../pods/rickAndMorty/rickAndMorty.container";

export const RickAndMortyScene = () => {
  return (
    <AppLayout>
      <RickAndMortyContainer />
    </AppLayout>
  );
};
