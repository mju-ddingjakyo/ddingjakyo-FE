import React, { useEffect, useState } from "react";
import { getReceiveProposal } from "../../utility/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import Team from "../../components/ui/Team";
import { useCookies } from "react-cookie";
import Header from "../../components/ui/Header";
import ProposalNav from "../../components/ui/ProposalNav";
import NotLogin from "../auth/NotLogin";
import { acceptProposal } from "../../utility/api";
import { rejectProposal } from "../../utility/api";
import { useNavigate } from "react-router-dom";
import NoTeam from "../team/NoTeam";

export default function ReceiveProposal() {
  const { data, error } = useQuery({
    queryKey: ["receiveProposal"],
    queryFn: () => getReceiveProposal(localStorage.getItem("JSESSIONID")),
  });

  const acceptMutation = useMutation({
    mutationFn: acceptProposal, onSuccess: (data) => {
      alert("수락 성공!")
      console.log(data)
    }, onError: (err) => {
      console.log(err.response.status)
      if (err.response.status === 401) alert("리더만 수락 가능합니다!")
      console.log(err)
    }
  })
  const [teamData, setTeamData] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const handleAccept = (id) => {
    acceptMutation.mutate({
      proposalData: {
        sendTeamId: id,
        matchingResult: "true"
      },
      JSESSIONID: localStorage.getItem("JSESSIONID")
    },)
  }

  useEffect(() => {
    console.log(data?.data.data)
    setStatus(error?.response.status);
    data ? setTeamData(data.data.data.filter((data) => (data.sendTeam.matchStatus !== "IMPOSSIBLE"))) : setTeamData();
  }, [data, error]);

  return (
    <>
      {status === 401 ? <NotLogin /> :
        <>
          {status === 400 ? <NoTeam message={"받은 신청이"} /> :
            <div>
              <Header></Header>
              <ProposalNav></ProposalNav>
              {teamData?.map((team) => (
                <div className="flex items-center justify-evenly">
                  <Team
                    key={team.sendTeam.teamId}
                    teamID={team.sendTeam.teamId}
                    name={team.sendTeam.name}
                    content={team.sendTeam.content}
                    member_count={team.sendTeam.memberCount}
                    match_status={team.sendTeam.matchStatus}
                    member_profile={team.sendTeam.membersProfile}
                  ></Team>
                  <div className="ml-4">
                    <button onClick={() => {
                      handleAccept(team.sendTeam.teamId)
                    }} className="bg-cyan-200 w-14 h-10 mb-3 rounded-lg text-cyan-800">
                      수락
                    </button>
                    <button className="bg-red-300 w-14 h-10 rounded-lg text-red-900">
                      거절
                    </button>
                  </div>
                </div>
              ))}
            </div>}
        </>}
    </>
  );
}
