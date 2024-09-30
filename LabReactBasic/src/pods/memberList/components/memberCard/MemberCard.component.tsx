import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { IMember } from "../../memberList.vm";
import emotionStyled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export interface IMemberCard {
  member: IMember;
}

const SCard = emotionStyled(Card)`
    width: 200px;
    margin: 10px;
`;

const SCardMedia = emotionStyled(CardMedia)`
    height: 200px;    
`;

const MemberCard = (props: IMemberCard) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${props.member.login}`);
  };

  return (
    <SCard>
      <SCardMedia image={props.member.avatar} title={props.member.login} />
      <CardContent title={props.member.login}>{props.member.login}</CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Details
        </Button>
      </CardActions>
    </SCard>
  );
};

export default MemberCard;
