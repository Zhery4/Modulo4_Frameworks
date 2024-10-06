import { RickAndMortyComponent } from "./rickAndMorty.component";
import emotionStyled from "@emotion/styled";

const SContent = emotionStyled.div`
  display: flex;
  flex-direction: column;  
  gap: 20px;
`;

export const RickAndMortyContainer = () => {
  return (
    <SContent>
      <RickAndMortyComponent />
    </SContent>
  );
};
