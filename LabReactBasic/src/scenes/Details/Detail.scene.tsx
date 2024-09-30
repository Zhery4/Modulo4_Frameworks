import { useParams } from "react-router-dom";
import { MemberDetailsContainer } from "../../pods/memberDetails/memberDetails.container";

const DetailScene = () => {
  const { id } = useParams();
  return (
    <div>
      <MemberDetailsContainer id={id!} />
    </div>
  );
};

export default DetailScene;
