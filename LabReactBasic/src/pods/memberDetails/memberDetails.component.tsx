import emotionStyled from "@emotion/styled";
import { IMemberDetail } from "./memberDetails.vm";
import { Card, CardContent, Typography } from "@mui/material";

interface IMemberDetailProps {
  member: IMemberDetail;
}

const SDetails = emotionStyled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const SImage = emotionStyled.img`
  width: 200px;
  height: 200px;
`;

export const MemberDetails = (props: IMemberDetailProps) => {
  const { member } = props;

  return (
<div>
      {member && (
        <SDetails>
          <SImage src={member.imageUrl} alt={member.name} />
          <Card sx={{ width: "1080px" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                User: {member.login}
              </Typography>
              {
                member.name && (
                  <Typography variant="body2" color="text.secondary">
                    Name: {member.name}
                  </Typography>
                )
              }
              {
                member.company && (
                  <Typography variant="body2" color="text.secondary">
                    Company: {member.company}
                  </Typography>
                )
              }
              {
                member.bio && (
                  <Typography variant="body2" color="text.secondary">
                    Bio: {member.bio}
                  </Typography>
                )
              }
              {
                member.location && (
                  <Typography variant="body2" color="text.secondary">
                    Location: {member.location}
                  </Typography>
                )
              }
            </CardContent>
          </Card>
        </SDetails>
      )}
    </div>
  );
};
