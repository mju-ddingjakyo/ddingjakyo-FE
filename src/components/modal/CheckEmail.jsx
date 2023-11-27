import { useMutation } from "@tanstack/react-query";
import Input from "../input/Input";
import { emailConfirm } from "../../utility/api";
import { useState } from "react";
import useForm from "../../customHook/useForm";
export default function CheckEmail({ email, closeModal, setDisabled }) {
  const { onChange, values } = useForm({ authCode: "" });
  const mutation = useMutation({ mutationFn: emailConfirm });

  const handleSubmit = (e) => {
    console.log(values.authCode);
    e.preventDefault();
    mutation.mutate(
      {
        email: email,
        authCode: values.authCode,
      },
      {
        onSuccess: () => {
          alert("인증 성공!");
          closeModal(true);
          setDisabled(true)
        },
        onError: () => {
          alert("인증 실패!");
        },
      }
    );
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-5 flex flex-col  bg-white rounded-lg"
      >
        <div className="flex items-center -mb-4">
          <Input
            labelText={"인증코드"}
            type={"text"}
            name={"authCode"}
            onChange={onChange}
            value={values.authCode}
            placeHolder={"인증 코드를 확인해주세요."}
          />
        </div>
        <div className="flex items-center flex-col">
          <div className="flex justify-between mb-7 ml-3 mr-3">
            <div className="mr-12">인증코드를 받지 못하셨나요?</div>
            <div>[ 인증코드 재발송 ]</div>
          </div>
          <button
            type="submit"
            className="w-[130px] h-10 text-white text-m bg-violet-400 rounded-lg p-2 hover:bg-violet-200"
          >
            인증하기
          </button>
        </div>
      </form>
    </div>
  );
}
