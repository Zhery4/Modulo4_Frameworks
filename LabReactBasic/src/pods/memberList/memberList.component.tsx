import { Button, CircularProgress, Input } from "@mui/material";
import MemberListContainer from "./memberList.container";
import { useEffect, useState } from "react";
import { getMemberList } from "./memberList.api";
import { mapMemberListFromApiToVm } from "./memberList.mapper";
import { IMember } from "./memberList.vm";
import "./memberList.css";
import { useOrganization } from "../../core/organization/Organization.context";
import { CardList } from "../../common/components";

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
      setHasNextPage(false);
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
        <Button type="submit" variant="contained" color="secondary">
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
                <CardList
                  key={member.id}
                  details={{
                    id: member.id,
                    name: member.login,
                    image: member.avatar,
                  }}
                  apiRoute="detail"
                />
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
