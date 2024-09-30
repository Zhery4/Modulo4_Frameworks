import { IMemberDetailApiModel } from "./memberDetails.api-model";
import { IMemberDetail } from "./memberDetails.vm";

export const mapMemberDetailFromApiToVm = (
  member: IMemberDetailApiModel
): IMemberDetail => {
  return {
    id: member.id,
    login: member.login,
    name: member.name,
    company: member.company,
    bio: member.bio,
  };
};
