import React from "react";
import Input from "../input/Input";
import useForm from "../../customHook/useForm";
import validateInput from "../../utility/validateInput";
import { proposal } from "../../utility/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export default function KakaoID({ closeModal, teamID }) {
  console.log(teamID)
  const navigate = useNavigate();
  const { onChange, values, errors } = useForm(
    {
      openKakaoID: "",
    },
    validateInput
  );
  const mutation = useMutation({
    mutationFn: proposal,
    onSuccess: (data) => {
      console.log(data.data)
      alert(data?.data?.data?.kakaoURL)
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const proposalData = {
    receiveTeamId: teamID,
    kakaoRoomURL: values.openKakaoID
  }
  const handleSubmit = (e) => {
    console.log(teamID);
    e.preventDefault();
    mutation.mutate({
      proposalData: proposalData,
      JSESSIONID: localStorage.getItem("JSESSIONID")
    }, {
      onSuccess: () => {
        alert("신청 성공!")
        navigate("/proposal/send-proposal");
      },
      onError: () => {
        alert("신청 실패!")
      }
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <Input
            labelText={"카카오톡ID"}
            type={"text"}
            name={"openKakaoID"}
            placeHolder={"카카오톡 오픈 톡방 ID를 입력해주세요!"}
            onChange={onChange}
            value={values.openKakaoID}
            errorMessage={errors.openKakaoID}
          />
          <button className="w-24 h-12 rounded-lg bg-violet-500 text-white ml-5">
            신청하기!
          </button>
        </div>
      </form>
    </>
  );
}
