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
    queryFn: () => getMyTeam(cookies.JSESSIONID),
  });
  const [hasTeam, setHasTeam] = useState(false);
  const [teamData, setTeamData] = useState();
  const [cookies] = useCookies(["JSESSIONID"]);
  const [auth, setAuth] = useState();

  useEffect(() => {
    // 팀 없을 때 api 결과값 어떻게 들어오는지 봐야함
    data ? setTeamData(data) : setTeamData();
    setAuth(error?.response.data.responseStatus);
  }, [data, error]);

  return (
    <>{
      auth === "UNAUTHORIZED" ? <NotLogin></NotLogin> :
        <>

          {hasTeam ? <TeamPage teamData={teamData} /> : <CreateTeam />}

        </>
    }
    </>
  );
}


