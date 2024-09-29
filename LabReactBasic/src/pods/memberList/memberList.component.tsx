import { Button, Input } from "@mui/material";
import MemberListContainer from "./memberList.container";
import { useEffect, useState } from "react";
import { getMemberList } from "./memberList.api";
import { mapMemberListFromApiToVm } from "./memberList.mapper";
import { IMemberApiModel } from "./memberList.api-model";

interface IMemberListProps {

}


const MemberList = (props: IMemberListProps) => {
    const [memberList, setMemberList] = useState<IMemberApiModel[]>([]);
    const [form, setForm] = useState({
        search: "lemoncode"
    });
    const fetchMemberList = async () => {
        const response = await getMemberList(form.search);
        console.log(response.data);
        //const mappedList = mapMemberListFromApiToVm(response.data);
        setMemberList(response.data);
    };

    useEffect(() => {
        fetchMemberList();
    }, []);

    return (
        <MemberListContainer>
            <form onSubmit={(e) => { 
                e.preventDefault();
                fetchMemberList();
            }}>
                <Input placeholder="Search member" value={form.search} onChange={(event)=>{
                    setForm({
                        ...form,
                        search: event.target.value
                    });
                }} />
                <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>
            <div>
                {
                    memberList.map((member) => (
                        <div key={member.id}>
                            <img src={member.avatar_url} alt={member.login} />
                            <span>{member.login}</span>
                        </div>
                    ))
                }
            </div>
        </MemberListContainer>
    )
}

export default MemberList;