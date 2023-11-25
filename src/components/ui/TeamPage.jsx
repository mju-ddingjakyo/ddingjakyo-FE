import React from "react";
import Profile from "./Profile";
export default function TeamPage({ teamData }) {
  return (
    <div className="relative h-1/2 bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
      <div className="p-5 flex flex-col items-center">
        <div className="flex">
          {teamData?.members.map((member) => (
            <div key={member.memberId} className="mx-3">
              <img
                className="w-24 h-24 rounded-full"
                src={member.profileImage}
                alt="프로필"
              ></img>
            </div>
          ))}
        </div>
        <div className="text-white text-4xl font-bold mt-5 self-start">
          {teamData?.name}
        </div>
        <div className="text-white text-2xl font-bold mt-5 self-start">
          인원 {teamData?.member_count}명
        </div>
      </div>
      <div className="absolute w-full h-[600px] top-60 bg-slate-50 rounded-tl-[45px] rounded-tr-[45px] p-5">
        <div className="text-zinc-600 text-xl border-b-2 pb-5 border-zinc-400">
          {teamData?.content}
        </div>
        <div className="h-[500px] overflow-y-auto scrollbar mt-5">
          {teamData?.members.map((member) => (
            <Profile
              key={member.memberId}
              img={member.profileImage}
              name={member.nickname}
              major={member.major}
              age={member.age}
              mbti={member.mbti}
              introduction={member.introduction}
            ></Profile>
          ))}
        </div>
      </div>
    </div>
  );
}
