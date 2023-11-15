import React from "react";
import useForm from "../customHook/useForm";
import Input from "../components/Input";
import Icon from "../components/Icon";
import IconButton from "../components/IconButton";
import mainLogo from "../assets/mainLogo.svg";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { onChange, values } = useForm({
    email: "",
    password: "",
  });

  const naviagate = useNavigate();

  return (
    <div className="flex h-full flex-col items-center justify-start bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
      <IconButton
        onClick={() => {
          naviagate("/");
        }}
      >
        <Icon iconName={mainLogo} />
      </IconButton>
      <div className="text-white font-bold text-3xl text-center p-10 mb-10">
        띵작교와 함께해요 !
      </div>

      <form
        className="p-5 flex flex-col items-center bg-white rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        noValidate
      >
        <Input
          labelText={"이메일"}
          type={"email"}
          name={"email"}
          placeHolder={"abc@mju.ac.kr"}
          onChange={onChange}
          value={values.email}
        />
        <Input
          labelText={"패스워드"}
          type={"password"}
          name={"password"}
          onChange={onChange}
          value={values.password}
        />

        <button
          type="submit"
          className="w-[386px] h-14 mt-5 text-white text-xl bg-violet-800 rounded-lg p-2 hover:bg-violet-400"
        >
          로그인
        </button>
      </form>
      <div
        className="text-white mt-3 cursor-pointer"
        onClick={() => {
          naviagate("/join");
        }}
      >
        회원가입
      </div>
    </div>
  );
}
