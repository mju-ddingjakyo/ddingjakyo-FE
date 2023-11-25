import React, { useEffect, useState } from "react";
import Header from "../../components/ui/Header";
import useModal from "../../customHook/useModal";
import Modal from "../../components/modal/Modal";
import KakaoID from "../../components/modal/KakaoID";
import { useParams } from "react-router-dom";
import { getTeamDetail } from "../../utility/api";
import { useQuery } from "@tanstack/react-query";
import TeamPage from "../../components/ui/TeamPage";
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
      memberId: 4,
      nickname: "윤지후",
      gender: "0",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요.",
      age: 20,
      mbti: "ENFP",
      profileImage: "https://via.placeholder.com/90x90",
    },
    {
      memberId: 5,
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

export default function TeamDetail() {
  const [teamData, setTeamData] = useState();
  const { visibility, openModal, closeModal } = useModal();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["team", id],
    queryFn: () => getTeamDetail(id),
  });

  useEffect(() => {
    data ? setTeamData(data) : setTeamData(datas);
  }, [data]);

  return (
    <>
      <Header />
      <TeamPage teamData={teamData} />
      <div className="w-[632px] h-[95px] bg-violet-200 shadow absolute bottom-0 flex justify-center items-center">
        <button
          onClick={openModal}
          className="w-96 h-16 bg-violet-300 rounded-2xl text-indigo-600 text-2xl font-bold hover:text-indigo-400"
        >
          미팅 신청하기
        </button>
      </div>
      <Modal closeModal={closeModal} visibility={visibility}>
        <KakaoID closeModal={closeModal} teamID={id}></KakaoID>
      </Modal>
    </>
  );
}
