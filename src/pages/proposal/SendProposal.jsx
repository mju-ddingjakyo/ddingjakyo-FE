import React, { useEffect, useState } from "react";
import { getSendProposal } from "../../utility/api";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import NotLogin from "../auth/NotLogin";
import Header from "../../components/ui/Header";
import ProposalNav from "../../components/ui/ProposalNav";
import { useNavigate } from "react-router-dom";
import CreateTeam from "../team/CreateTeam"
const datas = {
  name: "꽃보다 디콘디",
  gender: "0",
  content: "안녕하세요 저희는 어떤 팀입니다.",
  member_count: "3",
  leader_id: "1",
  match_status: "매칭 가능",
  members: [
    {
      memberId: 1,
      nickname: "김융소",
      gender: "0",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요. 융소의 자랑 김융소입니다.",
      age: 21,
      mbti: "ISTJ",
      profileImage:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
    },
    {
      memberId: 2,
      nickname: "김경영",
      gender: "0",
      major: "경영학부",
      introduction: "안녕하세요.",
      age: 20,
      mbti: "INFJ",
      profileImage:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
    },
    {
      memberId: 3,
      nickname: "김영환",
      gender: "0",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요.",
      age: 20,
      mbti: "ENFP",
      profileImage:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
    },
  ],
};

export default function SendProposal() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["sendProposal"],
    queryFn: () => getSendProposal(cookies),
  });
  const [teamData, setTeamData] = useState();
  const [cookies] = useCookies(["JSESSIONID"]);
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    data ? setTeamData(data) : setTeamData(datas);
    setStatus(error?.response.status);
    console.log(error?.response.status)
  }, [data, error]);
  if (isLoading) return null;
  return (
    status === 401 ? <NotLogin /> : <>
      {
        status === 400 ?
          <>
            <Header></Header>
            <ProposalNav></ProposalNav>
          </> : <div onClick={() => { navigate("/myteam") }}>팀 만들러 가기</div>

      }
    </>
  );
}
