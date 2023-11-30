import React, { useEffect, useState } from "react";
import { getCompleteProposal } from "../../utility/api";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import NotLogin from "../auth/NotLogin";
import Header from "../../components/ui/Header";
import ProposalNav from "../../components/ui/ProposalNav";
import SendProposalUI from "../../components/ui/SendProposalUI";
import Team from "../../components/ui/Team";
import NoTeam from "../team/NoTeam";

export default function CompleteProposal() {
  const [teamData, setTeamData] = useState();
  const [status, setStatus] = useState();
  const queryClient = useQueryClient();
  const { data, error } = useQuery({
    queryKey: ["completeProposal"],
    queryFn: () => getCompleteProposal(localStorage.getItem("JSESSIONID")),
  });
  useEffect(() => {
    console.log(data?.data.data)
    setStatus(error?.response.status);
    console.log(queryClient.getQueryData({ queryKey: ["accept", 4] }));
    data ? setTeamData(data?.data.data) : setTeamData();
  }, [data, error]);

  return (
    status === 401 ? <NotLogin /> :
      <>
        {
          status === 400 ? <NoTeam message={"매칭이 성공된 팀이"} /> :
            <div>
              <Header></Header>
              <ProposalNav></ProposalNav>
              <div className="w-[540px] m-0 m-auto">
                {teamData?.map((data) => (
                  <Team name={data.team.name}
                    content={data.team.content}
                    member_count={data.team.memberCount}
                    match_status={data.team.matchStatus}
                    members_profile={data.team.membersProfile}
                    teamID={data.team.teamId}>
                  </Team>
                ))}
              </div>
            </div>}
      </>
  )
}
