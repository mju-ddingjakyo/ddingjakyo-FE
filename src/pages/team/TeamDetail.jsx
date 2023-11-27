import React, { useEffect, useState } from "react";
import Header from "../../components/ui/Header";
import useModal from "../../customHook/useModal";
import Modal from "../../components/modal/Modal";
import KakaoID from "../../components/modal/KakaoID";
import { useParams } from "react-router-dom";
import { getTeamDetail } from "../../utility/api";
import { useQuery } from "@tanstack/react-query";
import TeamPage from "../../components/ui/TeamPage";


export default function TeamDetail() {
  const [teamData, setTeamData] = useState();
  const { visibility, openModal, closeModal } = useModal();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["team", id],
    queryFn: () => getTeamDetail({ teamId: id, JSESSIONID: localStorage.getItem("JSESSIONID") }),
  });

  useEffect(() => {
    data ? setTeamData(data.data.data) : setTeamData();
    console.log(data)
  }, [data]);

  const matchStatus = () => {
    if (teamData?.matchStatus === "POSSIBLE") {
      return (<button
        onClick={openModal}
        className="w-96 h-16 bg-violet-300 rounded-2xl text-indigo-600 text-2xl font-bold hover:text-indigo-400"
      >
        미팅 신청하기
      </button>)
    }
    if (teamData?.matchStatus === "IMPOSSIBLE") {
      return (<button
        disabled="true"
        className="w-96 h-16 bg-slate-200 rounded-2xl text-slate-500 text-2xl font-bold"
      >
        매칭 완료됨
      </button>)
    }
  }

  return (
    <>
      <TeamPage teamData={teamData} />
      <div className="w-[632px] h-[95px] bg-violet-200 shadow absolute bottom-0 flex justify-center items-center">
        {matchStatus()}
      </div>
      <Modal closeModal={closeModal} visibility={visibility}>
        <KakaoID closeModal={closeModal} teamID={id}></KakaoID>
      </Modal>
    </>
  );
}
