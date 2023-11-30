import React, { useEffect, useState } from "react";
import Header from "../components/ui/Header.jsx";
import Footer from "../components/ui/Footer.jsx";
import Team from "../components/ui/Team.jsx";
import mainLogo from "../assets/mainLogo.svg";
import Icon from "../components/icon/Icon.jsx";
import IconButton from "../components/icon/IconButton.jsx";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllTeams } from "../utility/api.js";
import { useNavigate } from "react-router-dom";
import { getMy } from "../utility/api.js";


export default function Home() {

  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();
  const { data, error } = useQuery({
    queryKey: ["teams"],
    queryFn: getAllTeams,
  });
  const { data: myData, error: myError } = useQuery({
    queryKey: ["myData"],
    queryFn: () => getMy(localStorage.getItem("JSESSIONID")),
  })
  useEffect(() => {
    console.log(data)
    if (myError?.response.status === 404) {
      navigate("/profile")
    } else {
      navigate("/")
    }
    data ? setTeams(data.data.data.filter((data) => (
      data.matchStatus !== "IMPOSSIBLE"
    ))) : setTeams([]);
  }, [data, myError]);

  return (
    <div>
      <Header></Header>
      <div className="h-[350px] flex justify-center bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
        <IconButton>
          <Icon iconName={mainLogo} />
        </IconButton>
      </div>
      <div className="w-[540px] m-0 m-auto">
        <h1 className="text-stone-900 text-[32px] font-bold self-start my-3">
          과팅
        </h1>
        <div className="w-full h-96 overflow-y-auto scrollbar">
          {teams.map((data) => (
            <Team
              key={data.teamId}
              name={data.name}
              content={data.content}
              member_count={data.memberCount}
              match_status={data.matchStatus}
              members_profile={data.membersProfile}
              gender={data.gender}
              teamID={data.teamId}
            ></Team>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
