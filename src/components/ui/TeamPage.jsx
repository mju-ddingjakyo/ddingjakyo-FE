import React from "react";
import Profile from "./Profile";
import Header from "./Header";
import Footer from "./Footer";
import IconButton from "../icon/IconButton";
import Icon from "../icon/Icon";
import editIcon from "../../assets/edit.svg"
import useModal from "../../customHook/useModal";
import ModifyTeam from "../modal/ModifyTeam";
import Modal from "../modal/Modal";
import { deleteTeam } from "../../utility/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export default function TeamPage({ teamData, myTeam }) {
  const { visibility, openModal, closeModal } = useModal();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteTeam, onSuccess: () => {
      alert("삭제 성공");
      window.location.reload();
    },
    onError: (err) => {
      if (err.response.status === 401) alert("팀의 리더만 삭제 가능합니다!")
    }
  });

  const handleDelete = () => {
    mutation.mutate({
      JSESSIONID: localStorage.getItem("JSESSIONID")
    })
  }
  return (
    <>
      <Header></Header>
      <div className="relative h-1/2 bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
        <div className="p-5 flex flex-col items-center">
          <div className="flex">
            {teamData?.membersResponse.map((member) => (
              <div key={member.memberId} className="mx-3">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src={member.profileImage}
                  alt="프로필"
                ></img>
              </div>
            ))}
          </div>
          <div className="text-white text-4xl font-bold mt-5 self-start">
            {teamData?.name}
          </div>
          <div className="w-full flex justify-between">
            <div className="text-white text-2xl font-bold mt-5 self-start">
              인원 {teamData?.memberCount}명
            </div>

            {myTeam ? <IconButton onClick={openModal}><Icon iconName={editIcon}></Icon></IconButton> : null}
            {myTeam ? <button onClick={handleDelete} className="absolute top-0 right-5 bg-violet-600 text-white rounded-lg p-3 hover:bg-violet-300">팀 삭제</button> : null}

          </div>
        </div>
        <div className="absolute w-full h-[600px] top-60 bg-slate-50 rounded-tl-[45px] rounded-tr-[45px] p-5">
          <div className="text-zinc-600 text-xl border-b-2 pb-5 border-zinc-400">
            {teamData?.content}
          </div>
          <div className="h-[500px] overflow-y-auto scrollbar mt-5">
            {teamData?.membersResponse.map((member) => (
              <Profile
                key={member.memberId}
                img={member.profileImage}
                name={member.nickname}
                major={member.major}
                age={member.age}
                mbti={member.mbti}
                conten
                introduction={member.introduction}
              ></Profile>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Modal closeModal={closeModal} visibility={visibility}>
        <ModifyTeam
          teamData={teamData} closeModal={closeModal}
        ></ModifyTeam>
      </Modal>
    </>
  );
}
