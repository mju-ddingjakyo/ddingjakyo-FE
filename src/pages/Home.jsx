import React, { useEffect, useState } from "react";
import Header from "../components/ui/Header.jsx";
import Footer from "../components/ui/Footer.jsx";
import Team from "../components/ui/Team.jsx";
import mainLogo from "../assets/mainLogo.svg";
import Icon from "../components/icon/Icon.jsx";
import IconButton from "../components/icon/IconButton.jsx";
import { useQuery } from "@tanstack/react-query";
import { getAllTeams } from "../utility/api.js";
import { getMy } from "../utility/api.js";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [teams, setTeams] = useState([]);
  const { data, error } = useQuery({
    queryKey: ["teams"],
    queryFn: getAllTeams,
  });

  useEffect(() => {
    console.log(data?.data)

    data?.data?.teams ? setTeams(data.data.teams) : setTeams([]);
  }, [data]);

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
              name={data.name}
              content={data.content}
              member_count={data.member_count}
              match_status={data.match_status}
              member_profile={data.members_profile}
            ></Team>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
