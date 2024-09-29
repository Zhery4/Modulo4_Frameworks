import { IMemberApiModel } from "./memberList.api-model";
import { IMember } from "./memberList.vm";

export const mapMemberListFromApiToVm = (memberList: IMemberApiModel[]): IMember[] => {
    return memberList.map((member) => ({
        id: member.id,
        login: member.login,
        avatar: member.avatar_url
    }));
};