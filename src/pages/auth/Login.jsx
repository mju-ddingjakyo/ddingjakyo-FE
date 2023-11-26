import React from "react";
import useForm from "../../customHook/useForm.jsx";
import Input from "../../components/input/Input.jsx";
import Icon from "../../components/icon/Icon.jsx";
import IconButton from "../../components/icon/IconButton.jsx";
import mainLogo from "../../assets/mainLogo.svg";
import { useNavigate } from "react-router-dom";
import { login } from "../../utility/api.js";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";

export default function Login() {
  const { onChange, values } = useForm({
    email: "",
    password: "",
  });
  const naviagate = useNavigate();
  const mutation = useMutation({ mutationFn: login });
  const [cookie, setCookie, removeCookie] = useCookies(["JSESSIONID"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    mutation.mutate({ formData }, {
      onSuccess: (data) => {
        console.log(data);
        console.log(data.data.data.sessionId)
        localStorage.setItem("JSESSIONID", data.data.data.sessionId);
        setCookie('JSESSIONID', data.data.sessionId);
        naviagate('/');
      },
      onError: (error) => {
        console.log(error);
      }
    });
  };

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
        onSubmit={handleSubmit}
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
