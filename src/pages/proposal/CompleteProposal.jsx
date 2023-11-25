import React, { useEffect, useState } from "react";
import { getCompleteProposal } from "../../utility/api";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
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
      proposal_status: "REJECTED",
      members_profile: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
      ],
    },
  ],
};

export default function CompleteProposal() {
  const [teamData, setTeamData] = useState();
  const [cookies] = useCookies(["JSESSIONID"]);
  const { data } = useQuery({
    queryKey: ["completeProposal"],
    queryFn: () => getCompleteProposal(cookies),
  });
  useEffect(() => {
    data ? setTeamData(data) : setTeamData(datas);
  }, [data]);

  return <div>CompleteProposal</div>;
}
