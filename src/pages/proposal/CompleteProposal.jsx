import React, { useEffect, useState } from "react";
import { getCompleteProposal } from "../../utility/api";
import { useQuery } from "@tanstack/react-query";
import NotLogin from "../auth/NotLogin";
import Header from "../../components/ui/Header";
import ProposalNav from "../../components/ui/ProposalNav";
import SendProposalUI from "../../components/ui/SendProposalUI";
import Team from "../../components/ui/Team";

export default function CompleteProposal() {
  const [teamData, setTeamData] = useState();
  const [status, setStatus] = useState();
  const { data, error } = useQuery({
    queryKey: ["completeProposal"],
    queryFn: () => getCompleteProposal(localStorage.getItem("JSESSIONID")),
  });
  useEffect(() => {
    console.log(data?.data.data)
    setStatus(error?.response.status);

    data ? setTeamData(data?.data.data) : setTeamData();
  }, [data, error]);

  return (
    status === 401 ? <NotLogin /> :
      <>
        {
          status === 400 ? <div>완료된 신청 없음</div> :
            <>
              <Header></Header>
              <ProposalNav></ProposalNav>
              {teamData?.map((data) => (
                <Team name={data.sendTeam.name}
                  content={data.sendTeam.content}
                  member_count={data.sendTeam.memberCount}
                  match_status={data.sendTeam.matchStatus}
                  member_profile={data.sendTeam.membersProfile}
                  teamID={data.sendTeam.teamId}>
                </Team>
              ))}</>}
      </>
  )
}
