import React, { useEffect, useState } from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import { useQuery } from "@tanstack/react-query";
import { getMyTeam } from "../../utility/api";
import CreateTeam from "./CreateTeam";
import TeamPage from "../../components/ui/TeamPage";
import { useCookies } from "react-cookie";
import NotLogin from "../auth/NotLogin"
export default function MyTeam() {
  const { data, error } = useQuery({
    queryKey: ["myTeam"],
    queryFn: () => getMyTeam(localStorage.getItem("JSESSIONID")),
  });
  const [hasTeam, setHasTeam] = useState(false);
  const [teamData, setTeamData] = useState();
  const [status, setStauts] = useState();

  useEffect(() => {
    // 팀 없을 때 api 결과값 어떻게 들어오는지 봐야함
    console.log(data?.data.data)
    data ? setTeamData(data?.data.data) : setTeamData();
    setStauts(error?.response.status);
  }, [data, error]);

  return (
    <>{
      status === 401 ? <NotLogin /> :
        <>

          {teamData ? <TeamPage teamData={teamData} /> : <CreateTeam />}

        </>
    }
    </>
  );
}


