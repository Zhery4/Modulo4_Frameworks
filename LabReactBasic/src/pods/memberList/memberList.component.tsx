import { Button, Input } from "@mui/material";
import MemberListContainer from "./memberList.container";
import { useEffect, useState } from "react";
import { getMemberList } from "./memberList.api";
import { mapMemberListFromApiToVm } from "./memberList.mapper";
import { IMember } from "./memberList.vm";
import MemberCard from "./components/memberCard/MemberCard.component";
import "./memberList.css";

interface IMemberListProps {

}

const MemberList = (props: IMemberListProps) => {
    const [memberList, setMemberList] = useState<IMember[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false); // Determine if next page exists
    const [form, setForm] = useState({
        search: "lemoncode"
    });
    const fetchMemberList = async () => {
        const response = await getMemberList(form.search, currentPage);
        console.log(response.data);
        const mappedList = mapMemberListFromApiToVm(response.data);
        setMemberList(mappedList);
        const linkHeader = response.headers.link;
        if (linkHeader) {
          setHasNextPage(linkHeader.includes('rel="next"'));
        } else {
          setHasNextPage(false); // No next page available
        }
    };

    useEffect(() => {
        fetchMemberList();
    }, [currentPage]);
    const handleNextPage = () => {
        if (hasNextPage) setCurrentPage(currentPage + 1);
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      };
    return (
        <MemberListContainer>
            <form onSubmit={(e) => {
                e.preventDefault();
                fetchMemberList();
            }}>
                <Input placeholder="Search member" value={form.search} onChange={(event) => {
                    setForm({
                        ...form,
                        search: event.target.value
                    });
                }} />
                <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>
            <div>
                <div className="cards-container">
                    {
                        memberList.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))
                    }
                </div>
                <div>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage}</span>
                    <button onClick={handleNextPage} disabled={!hasNextPage}>
                        Next
                    </button>
                </div>
            </div>

        </MemberListContainer>
    )
}

export default MemberList;