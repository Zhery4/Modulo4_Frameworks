import { AppLayout } from "../../layouts/app/App.layout";
import MemberList from "../../pods/memberList/memberList.component";

export const HomeScene = () => {
  return (
    <AppLayout>
      <MemberList />
    </AppLayout>
  );
};
