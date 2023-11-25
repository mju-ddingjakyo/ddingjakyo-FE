import React from "react";
import Input from "../input/Input";
import useForm from "../../customHook/useForm";
import validateInput from "../../utility/validateInput";
import { proposal } from "../../utility/api";
import { useMutation } from "@tanstack/react-query";
export default function KakaoID({ closeModal, teamID }) {
  const { onChange, values, errors } = useForm(
    {
      openKakaoID: "",
    },
    validateInput
  );
  const mutation = useMutation({
    mutationFn: proposal,
    onSuccess: () => {
      console.log("성공");
    },
    onError: (err) => {
      console.log("실패");
    },
  });
  const handleSubmit = (e) => {
    console.log(teamID);
    e.preventDefault();
    mutation.mutate({
      receiveTeamId: teamID,
      kakaoRoomURL: values.openKakaoID,
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
