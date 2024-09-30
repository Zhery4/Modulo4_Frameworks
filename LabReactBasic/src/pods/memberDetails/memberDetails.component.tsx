import { IMemberDetail } from "./memberDetails.vm";

interface IMemberDetailProps {
  member: IMemberDetail;
}

export const MemberDetails = (props: IMemberDetailProps) => {
  const { member } = props;

  return (
    <>
      <h2>{member?.login}</h2>
      <p>{member?.name}</p>
      <p>{member?.company}</p>
      <p>{member?.bio}</p>
    </>
  );
};
