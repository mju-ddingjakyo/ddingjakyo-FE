import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Team from "../components/Team";
const data = {
  teams: [
    {
      name: "꽃보다 디콘디",
      gender: "0",
      content:
        "Cause I know what you like boy (ah-ah)You're my chemical hype boy (ah-ah)내 지난날들은 눈 뜨면 잊는 꿈",
      member_count: "3",
      match_status: "POSSIBLE",
      members_profile: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
      ],
    },
    {
      name: "꽃보다 디콘디",
      gender: "0",
      content:
        "Cause I know what you like boy (ah-ah)You're my chemical hype boy (ah-ah)내 지난날들은 눈 뜨면 잊는 꿈",
      member_count: "3",
      match_status: "POSSIBLE",
      members_profile: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
      ],
    },
    {
      name: "꽃보다 응소",
      gender: "1",
      content: "안녕하세요 저희는 어떤 팀입니다.",
      member_count: "4",
      match_status: "POSSIBLE",
      members_profile: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
      ],
    },
    {
      name: "꽃보다 데테",
      gender: "0",
      content: "안녕하세요 저희는 어떤 팀입니다.",
      member_count: "2",
      match_status: "IMPOSSIBLE",
      members_profile: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkr.freepik.com%2Fpremium-photo%2Frealistic-funny-monkey-studying-while-drinking-coffee-ai-generated_39411095.htm&psig=AOvVaw05wURXQOMi38LUIh8FkVYA&ust=1699183996498000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCBmeafqoIDFQAAAAAdAAAAABAE",
      ],
    },
  ],
};

export default function Match() {
  return (
    <div>
      <Header />
      <div className="flex justify-around my-5">
        <div className="text-2xl font-bold cursor-pointer">보낸 신청</div>
        <div className="text-2xl font-bold cursor-pointer">받은 신청</div>
        <div className="text-2xl font-bold cursor-pointer">매칭 완료</div>
      </div>
      <div className="w-[540px] m-0 m-auto">
        <div className="w-full h-[700px] overflow-y-auto scrollbar">
          {data.teams.map((data) => (
            <Team
              name={data.name}
              content={data.content}
              member_count={data.member_count}
              match_status={data.match_status}
              member_profile={data.members_profile}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
