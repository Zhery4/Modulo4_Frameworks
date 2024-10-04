import emotionStyled from "@emotion/styled";
import { IMemberDetail } from "./memberDetails.vm";

interface IMemberDetailProps {
  member: IMemberDetail;
}

const SDetails = emotionStyled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const MemberDetails = (props: IMemberDetailProps) => {
  const { member } = props;

  return (
    <SDetails>
      <h2>login{member?.login}</h2>
      <p>{member?.name}</p>
      <p>{member?.company}</p>
      <p>{member?.bio}</p>
    </SDetails>
  );
};
