import React, { useEffect, useState } from "react";
import { getReceiveProposal } from "../../utility/api";
import { useQuery } from "@tanstack/react-query";
import Team from "../../components/ui/Team";

const datas = {
  teams: [
    {
      teamId: 1,
      name: "꽃보다 데테",
      gender: "0",
      content: "안녕하세요 저희는 어떤 팀입니다.",
      member_count: "3",
      proposal_status: "WAITING",
      members_profile: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
      ],
    },
    {
      teamId: 2,
      name: "꽃보다 응소",
      gender: "0",
      content: "안녕하세요 저희는 어떤 팀입니다.",
      member_count: "3",
      proposal_status: "WAITING",
      members_profile: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
      ],
    },
  ],
};

export default function ReceiveProposal() {
  const [teams, setTeams] = useState([]);

  const { data } = useQuery({
    queryKey: ["receiveProposal"],
    queryFn: getReceiveProposal,
  });

  useEffect(() => {
    data ? setTeams(data.teams) : setTeams(datas.teams);
  }, [data]);

  return (
    <div>
      {teams?.map((team) => (
        <div className="flex items-center justify-evenly">
          <Team
            key={team.teamId}
            teamID={team.teamId}
            name={team.name}
            content={team.content}
            member_count={team.member_count}
            match_status={team.proposal_status}
            member_profile={team.member_profile}
          ></Team>
          <div className="ml-4">
            <button className="bg-cyan-200 w-14 h-10 mb-3 rounded-lg text-cyan-800">
              수락
            </button>
            <button className="bg-red-300 w-14 h-10 rounded-lg text-red-900">
              거절
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
