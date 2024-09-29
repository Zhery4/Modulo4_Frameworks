import emotionStyled from "@emotion/styled";
import { PropsWithChildren } from "react"

const SContainer = emotionStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    width: 50%;
`;

const MemberListContainer = (props: PropsWithChildren) => {
    return (
        <SContainer>
            {props.children}
        </SContainer>
    )
}

export default MemberListContainer;