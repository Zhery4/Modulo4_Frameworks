import emotionStyled from "@emotion/styled";
import { PropsWithChildren } from "react";

const SHeader = emotionStyled.div`
    display: flex;
    background-color: #282c34;
    color: white;
    padding: 10px;
    align-items: center;
`;

export const HeaderLayout = (props: PropsWithChildren) => {
  return <SHeader>{props.children}</SHeader>;
};
