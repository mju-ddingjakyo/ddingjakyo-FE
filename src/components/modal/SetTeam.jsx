import Input from "../input/Input";
import useForm from "../../customHook/useForm";
import GenderCheck from "../input/GenderCheck";
import React, { useEffect, useState } from "react";
import NumberInput from "../input/NumberInput";
import validateInput from "../../utility/validateInput";
import useModal from "../../customHook/useModal";
import Modal from "./Modal";
import InviteMember from "./InviteMember";
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { createMyTeam } from "../../utility/api";

export default function SetTeam() {
  const { visibility, openModal, closeModal } = useModal();
  const { onChange, values, errors } = useForm(
    {
      teamName: "",
      teamIntro: "",
    },
    validateInput
  );

  const queryClient = useQueryClient();
  console.log(queryClient.getQueryData(["login"]));

  const [gender, setGender] = useState(0);
  const [number, setNumber] = useState(2);
  const [inviteMembers, setInviteMembers] = useState([]);
  const [memberEmail, setMemberEmail] = useState([]);
  const mutaion = useMutation({
    mutationFn: createMyTeam,
    onSuccess: () => {
      queryClient.invalidateQueries("myTeam");
    },
    onError: (err) => {
      alert("실패!");
      console.log("Error:", err);
    },
  });

  console.log(inviteMembers)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(memberEmail)
    const teamData = {
      name: values.teamName,
      gender: gender,
      content: values.teamIntro,
      memberCount: number,
      memberInfo: memberEmail,
    };
    console.log(teamData)

    mutaion.mutate({
      JSESSIONID: localStorage.getItem("JESSIONID"),
      teamData: teamData,
    });
  };

  useEffect(() => {
    inviteMembers.map((member) => {
      setMemberEmail([...memberEmail, member.email]);
    })
  }, [inviteMembers])

  return (
    <div className="flex flex-col items-center ">
      <div
        className="pt-[10px] w-[511px] h-[700px] absolute  top-[50px] rounded-[27px] flex flex-col items-center bg-white"
        style={{ boxShadow: "0px 4px 20px 0 rgba(0,0,0,0.2)" }}
      >
        <form
          className="p-5 flex flex-col items-center rounded-lg text-xl font-bold mt-4 "
          onSubmit={handleSubmit}
          noValidate
        >
          <Input
            labelText={"팀 이름"}
            type={"teamName"}
            name={"teamName"}
            placeHolder={"팀의 이름을 지어주세요."}
            onChange={onChange}
            value={values.email}
            errorMessage={errors.teamName}
          />

          <GenderCheck setGender={setGender} />

          <div className="flex mt-12 w-full ">
            <div className="text-xl font-bold flex flex-col w-full ">인원</div>
            <NumberInput
              setNumber={setNumber}
              number={number}
              maxNumber={5}
              minNumber={2}
            ></NumberInput>
          </div>

          <div className="w-full mt-12 mb-12 ">
            <div className="flex justify-between">
              <label
                className="text-black pb-2 font-semibold"
                htmlFor="memberButton"
              >
                멤버
              </label>
              <button
                onClick={openModal}
                id="memberButton"
                type="button"
                className=" text-violet-500 text-m bg-violet-200 w-1/3 rounded-lg p-2 hover:bg-violet-100"
              >
                + 멤버추가
              </button>
            </div>
            {inviteMembers.map((member) => (
              <div>
                <img src={`${member.profileImage}`}></img>
                <div className="text-xl font-medium">{member.nickname}</div>
                <div className="text-neutral-400 text-base font-medium">{member.email}</div>
              </div>
            ))}
          </div>
          <Input
            labelText={"팀 소개"}
            type={"teamIntro"}
            name={"teamIntro"}
            placeHolder={"팀을 소개해주세요."}
            onChange={onChange}
            value={values.teamIntro}
            errorMessage={errors.teamIntro}
          />

          <button
            type="submit"
            className="w-[186px] h-14 mt-8 text-white text-xl bg-violet-800 rounded-lg p-2 hover:bg-violet-400"
          >
            완료
          </button>
        </form>
      </div>
      <Modal closeModal={closeModal} visibility={visibility}>
        <InviteMember
          closeModal={closeModal}
          inviteMembers={inviteMembers}
          setInviteMembers={setInviteMembers}
        ></InviteMember>
      </Modal>
    </div>
  );
}
