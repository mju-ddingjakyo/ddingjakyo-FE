import React, { useState } from "react";
import useForm from "../customHook/useForm";
import Input from "../components/Input";
import Icon from "../components/Icon";
import IconButton from "../components/IconButton";
import validateInput from "../utility/validateInput";
import GenderCheck from "../components/GenderCheck";
export default function Join() {
  const { onChange, values, errors, handleSubmit } = useForm(
    {
      email: "",
      password: "",
      passwordCheck: "",
      teamName: "",
    },
    validateInput
  );
  const [gender, setGender] = useState(0);

  return (
    <div className="w-[632px] h-screen flex flex-col items-center justify-start bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
      <IconButton>
        <Icon iconName={"mainLogo"} width={"w-1/3"} />
        <div className="text-white font-bold text-3xl text-center p-10">
          띵작교와 함께해요 !
        </div>
      </IconButton>

      <form
        className="p-5 flex flex-col items-center bg-white rounded-lg"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex">
          <Input
            labelText={"이메일"}
            type={"email"}
            name={"email"}
            placeHolder={"abc@mju.ac.kr"}
            onChange={onChange}
            value={values.email}
            errorMessage={errors.email}
          />
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
          className="w-[386px] h-14 mt-14 text-white text-xl bg-violet-800 rounded-lg p-2 hover:bg-violet-400"
        >
          회원가입 완료
        </button>
      </form>
    </div>
  );
}
