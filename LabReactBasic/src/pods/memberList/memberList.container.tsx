import emotionStyled from "@emotion/styled";
import { PropsWithChildren } from "react"

const SContainer = emotionStyled.div`
    display: flex;
    flex-direction: row;        
    padding: 20px;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px; 
    gap: 50px;
`;

const MemberListContainer = (props: PropsWithChildren) => {
    return (
        <SContainer>
            {props.children}
        </SContainer>
    )
}

export default MemberListContainer;