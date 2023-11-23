import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import { useQuery } from "@tanstack/react-query";
import { getMyTeam } from "../utility/api";
import CreateTeam from "./CreateTeam";

const datas = {
  name: "꽃보다 디콘디",
  gender: "0",
  content:
    "Cause I know what you like boy (ah-ah)You're my chemical hype boy (ah-ah)내 지난날들은 눈 뜨면 잊는 꿈",
  member_count: "5",
  leader_id: "1",
  match_status: "매칭 가능",
  members: [
    {
      memberId: 1,
      nickname: "구준표",
      gender: "0",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요",
      age: 21,
      mbti: "ISTJ",
      profileImage: "https://via.placeholder.com/90x90",
    },
    {
      memberId: 2,
      nickname: "소이정",
      gender: "0",
      major: "경영학부",
      introduction: "안녕하세요.",
      age: 20,
      mbti: "INFJ",
      profileImage: "https://via.placeholder.com/90x90",
    },
    {
      memberId: 3,
      nickname: "윤지후",
      gender: "0",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요.",
      age: 20,
      mbti: "ENFP",
      profileImage: "https://via.placeholder.com/90x90",
    },
    {
      memberId: 3,
      nickname: "윤지후",
      gender: "0",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요.",
      age: 20,
      mbti: "ENFP",
      profileImage: "https://via.placeholder.com/90x90",
    },
    {
      memberId: 3,
      nickname: "윤지후",
      gender: "0",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요.",
      age: 20,
      mbti: "ENFP",
      profileImage: "https://via.placeholder.com/90x90",
    },
  ],
};

export default function MyTeam() {
  const [hasTeam, setHasTeam] = useState(false);
  const [members, setMembers] = useState([]);
  const { data, error } = useQuery({
    queryKey: ["teams"],
    queryFn: getMyTeam,
  });

  useEffect(() => {
    data?.members ? setMembers(data.members) : setMembers([]);
  }, [data]);

  return (
    <>
      <Header />
      {hasTeam ? (
        <div className="relative h-1/2 bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
          <div className="p-5 flex flex-col items-center">
            <div className="flex">
              {members.map((member) => (
                <div className="mx-3">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={member.profileImage}
                    alt="프로필"
                  ></img>
                </div>
              ))}
            </div>
            <div className="text-white text-4xl font-bold mt-5 self-start">
              {data?.name}
            </div>
            <div className="text-white text-2xl font-bold mt-5 self-start">
              인원 {data?.member_count}명
            </div>
          </div>
          <div className="absolute w-full h-[600px] top-60 bg-slate-50 rounded-tl-[45px] rounded-tr-[45px] p-5">
            <div className="text-zinc-600 text-xl border-b-2 pb-5 border-zinc-400">
              {data?.content}
            </div>
            <div className="h-[500px] overflow-y-auto scrollbar mt-5">
              {members.map((member) => (
                <Profile
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
      ) : (
        <CreateTeam />
      )}

      <Footer />
    </>
  );
}
