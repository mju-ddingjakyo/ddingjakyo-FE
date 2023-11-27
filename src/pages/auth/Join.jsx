import React, { useState } from "react";
import useForm from "../../customHook/useForm";
import Input from "../../components/input/Input";
import Icon from "../../components/icon/Icon";
import validateInput from "../../utility/validateInput";
import GenderCheck from "../../components/input/GenderCheck";
import mainLogo from "../../assets/mainLogo.svg";
import Modal from "../../components/modal/Modal";
import useModal from "../../customHook/useModal";
import CheckEmail from "../../components/modal/CheckEmail";
import { emailCertification } from "../../utility/api";
import { register } from "../../utility/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export default function Join() {
  const navigate = useNavigate();
  const { visibility, openModal, closeModal } = useModal();
  const { onChange, values, setErrors, errors } = useForm(
    {
      email: "",
      password: "",
      passwordCheck: "",
    },
    validateInput
  );
  const [gender, setGender] = useState(0);
  const emailMutation = useMutation({
    mutationFn: () => emailCertification(values.email),
  });
  const handleEmailCertification = (e) => {
    emailMutation.mutate();
  };

  const registerMutation = useMutation({
    mutationFn: register,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.email, gender, values.password);
    registerMutation.mutate(
      {
        email: values.email,
        gender: gender,
        password: values.password,
      },
      {
        onSuccess: () => {
          alert("성공");
          navigate("/login");
        },
        onError: () => {
          alert("실패!");
        },
      }
    );
  };

  return (
    <div className="h-full flex flex-col items-center justify-start bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
      <Icon iconName={mainLogo} width={"w-1/3"} />
      <div className="text-white font-bold text-3xl text-center p-10">
        띵작교와 함께해요 !
      </div>

      <form
        className="p-5 flex flex-col  bg-white rounded-lg"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex items-center justify-between">
          <Input
            labelText={"이메일"}
            type={"email"}
            name={"email"}
            placeHolder={"abc@mju.ac.kr"}
            onChange={onChange}
            value={values.email}
            errorMessage={errors.email}
            width="w-80"
          />
          <button
            onClick={() => {
              openModal();
              handleEmailCertification();
            }}
            type="button"
            className="bg-violet-400 text-white rounded-lg w-12 h-6"
          >
            인증
          </button>
        </div>
        <Input
          labelText={"패스워드"}
          type={"password"}
          name={"password"}
          placeHolder={"영문, 숫자, 특수기호 조합 8자리 이상"}
          onChange={onChange}
          value={values.password}
          errorMessage={errors.password}
        />
        <Input
          labelText={"패스워드 확인"}
          type={"password"}
          name={"passwordCheck"}
          onChange={onChange}
          value={values.passwordCheck}
          errorMessage={errors.passwordCheck}
        />
        <GenderCheck setGender={setGender} />
        <button
          type="submit"
          className="w-[386px] h-14 mt-14 text-white text-xl rounded-lg p-2 bg-violet-800 hover:bg-violet-400"
        >
          회원가입 완료
        </button>
      </form>
      <Modal closeModal={closeModal} visibility={visibility}>
        <CheckEmail closeModal={closeModal} email={values.email}></CheckEmail>
      </Modal>
    </div>
  );
}
