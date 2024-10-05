import { AppLayout } from "../../layouts/app/App.layout";
import RickAndMortyDetailsContainerComponent from "../../pods/rickAndMortyDetails/rickAndMortyDetails.container";
import { useParams } from "react-router-dom";

const RickAndMortyDetailsScene = () => {
  const { id } = useParams();

  return (
    <AppLayout>
      <RickAndMortyDetailsContainerComponent
        charachterId={id!}
      ></RickAndMortyDetailsContainerComponent>
    </AppLayout>
  );
};

export default RickAndMortyDetailsScene;
