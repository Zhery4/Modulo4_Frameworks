import { Button, CircularProgress, Input } from "@mui/material";
import MemberListContainer from "./memberList.container";
import { useEffect, useState } from "react";
import { getMemberList } from "./memberList.api";
import { mapMemberListFromApiToVm } from "./memberList.mapper";
import { IMember } from "./memberList.vm";
import MemberCard from "./components/memberCard/MemberCard.component";
import "./memberList.css";
import { useOrganization } from "../../core/organization/Organization.context";

interface IMemberListProps {}

const MemberList = (props: IMemberListProps) => {
  const [memberList, setMemberList] = useState<IMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const { organization, setOrganization } = useOrganization();
  const [form, setForm] = useState({
    search: organization,
  });

  const fetchMemberList = async () => {
    setIsLoading(true);
    const response = await getMemberList(form.search, currentPage);
    console.log(response.data);
    const mappedList = mapMemberListFromApiToVm(response.data);
    setMemberList(mappedList);
    setIsLoading(false);
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
      {/* TO-DO Form Component */}
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentPage(1);
          fetchMemberList();
          console.log(form.search);
          setOrganization(form.search);
        }}
      >
        <Input
          placeholder="Search member"
          value={form.search}
          required={true}
          onChange={(event) => {
            setForm({
              ...form,
              search: event.target.value,
            });
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>

      <div className="member-list-container">
        {isLoading ? (
          <CircularProgress color="secondary" />
        ) : (
          <>
            <div className="cards-container">
              {memberList.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
            <div className="page-selector">
              <Button
                variant="contained"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span>Page {currentPage}</span>
              <Button
                variant="contained"
                onClick={handleNextPage}
                disabled={!hasNextPage}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </MemberListContainer>
  );
};

export default MemberList;
