import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

const data = {
  name: "꽃보다 디콘디",
  gender: "0",
  content:
    "Cause I know what you like boy (ah-ah)You're my chemical hype boy (ah-ah)내 지난날들은 눈 뜨면 잊는 꿈",
  member_count: "5",
  leader_id: "1",
  match_status: "매칭 가능",
  proposal_status: "REJECTED",
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

export default function SentRequest() {
  let status, background;

  if (data.proposal_status === "REJECTED") {
    status = (
      <div className="ml-32 flex pb-10 flex-col items-center w-[213px] h-[70px] rounded-[17px]  bg-slate-200">
        <p className="text-[30px] mt-3 font-bold text-[#6A6A6A]">거절됨</p>
      </div>
    );

    background = "bg-gradient-to-b from-white to-black";
  } else if (data.proposal_status === "WAITING") {
    status = (
      <div className="ml-32 flex pb-10 flex-col items-center w-[213px] h-[70px] rounded-[17px] bg-[#e3d97e20]">
        <p className="text-[30px] mt-3 font-bold text-[#bea348]">대기중</p>
      </div>
    );

    background = "bg-gradient-to-b from-white to-[#fffa79]/[0.64]";
  } else if (data.proposal_status === "APPROVED") {
    status = (
      <div className="ml-32 flex pb-10 flex-col items-center w-[213px] h-[70px] rounded-[17px] bg-[#deffeb]">
        <p className="text-[30px] mt-3 font-bold text-[#00a925b5]">수락</p>
      </div>
    );
    background = "bg-gradient-to-b from-white to-[#b5ff92]";
  }

  return (
    <>
      <div className={`relative h-1/2 ${background}`}>
        <div className="pl-10 pt-40 flex items-center content-center">
          <div className="text-[#7E7E7E] text-xl mr-5 font-bold mt-5 self-start">
            {data.name}
          </div>
          <p className="text-[#7E7E7E] text-xl mr-5 font-bold mt-5 self-start">
            {" "}
            |{" "}
          </p>
          <div className="text-[#7E7E7E] text-xl font-bold mt-5 self-start">
            인원 {data.member_count}명
          </div>
          {status}
        </div>

        <div className="absolute w-full h-[600px] top-60 bg-[#FFFFFF] rounded-tl-[45px] rounded-tr-[45px] p-5">
          <div className="text-zinc-600 text-xl border-b-2 pb-5 border-zinc-400">
            {data.content}
          </div>
          <div className="h-[500px] overflow-y-auto scrollbar mt-5">
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
    </>
  );
}
