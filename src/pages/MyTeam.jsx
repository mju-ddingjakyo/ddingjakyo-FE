import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const data = {
  name: "꽃보다 디콘디",
  gender: "0",
  content:
    "Cause I know what you like boy (ah-ah)You're my chemical hype boy (ah-ah)내 지난날들은 눈 뜨면 잊는 꿈",
  member_count: "3",
  leader_id: "1",
  match_status: "매칭 가능",
  members: [
    {
      memberId: 1,
      nickname: "구준표",
      gender: "0",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요. 융소의 자랑 김융소입니다.",
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
  ],
};

export default function MyTeam() {
  return (
    <>
      <Header />
      <div className="w-full bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
        <div className="flex">
          {data.members.map((member) => (
            <div className="mx-3">
              <img
                className=" w-24
            h-24
            rounded-full"
                src={member.profileImage}
              ></img>
            </div>
          ))}
        </div>
        <div className="text-white text-4xl font-bold">{data.name}</div>
        <div className="w-full h-[750px] m-0 m-auto flex flex-col items-center  bg-white rounded-tl-[45px] rounded-tr-[45px] mt-10">
          <div className="w-4/5 h-1/6 text-zinc-600 text-xl font-medium mt-10 border-b-2 border-zinc-400 p-5">
            {data.content}
          </div>
          <div className="p-5">
            {data.members.map((member) => (
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
      <Footer />
    </>
  );
}
