import React, { useEffect, useState } from "react";
import { getSendProposal } from "../../utility/api";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import NotLogin from "../auth/NotLogin";
import Header from "../../components/ui/Header";
import ProposalNav from "../../components/ui/ProposalNav";
import { useNavigate } from "react-router-dom";
import CreateTeam from "../team/CreateTeam";
import SendProposalUI from "../../components/ui/SendProposalUI";
import NotTeam from "./NotTeam";

export default function SendProposal() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["sendProposal"],
    queryFn: () => getSendProposal(localStorage.getItem("JSESSIONID")),
  });
  const [teamData, setTeamData] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    data ? setTeamData(data.data.data) : setTeamData();
    setStatus(error?.response.status);
    // console.log(error?.response.status)
    console.log(data);
  }, [data, error]);
  if (isLoading) return null;
  return status === 401 ? (
    <NotLogin />
  ) : (
    <>
      {status === 400 ? (
        <>
          <Header />

          <ProposalNav />
          <NotTeam
            message={"보낸신청팀이"}
            submessage={"메인페이지에서 다른 팀에 신청을 보낼 수 있어요"}
          />
        </>
      ) : (
        <SendProposalUI teamData={teamData}></SendProposalUI>
      )}
    </>
  );
}
