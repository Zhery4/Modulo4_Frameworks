import emotionStyled from "@emotion/styled";
import "./memberList.css";
import { PropsWithChildren } from "react";

interface IMemberListContainerProps extends PropsWithChildren {
  // TODO
}

const SContainer = emotionStyled.div`
    display: flex;
    flex-direction: row;        
    padding: 20px;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px; 
    gap: 50px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
`;

const MemberListContainer = (props: PropsWithChildren) => {
  return <SContainer>{props.children}</SContainer>;
};

export default MemberListContainer;
