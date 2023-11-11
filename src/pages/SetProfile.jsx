import Icon from "../components/Icon";
import Input from "../components/Input";
import IconButton from "../components/IconButton";
import useForm from "../customHook/useForm";
import validateInput from "../utility/validateInput";
import MBTICheck from "../components/MBTICheck";
import React, { useState } from "react";

export default function SetProfile() {
  const { onChange, values, errors, handleSubmit } = useForm(
    {
      name: "",
      major: "",
      selfIntro: "",
      age: "",
    },
    validateInput
  );
  const [mbti, setMBTI] = useState(0);

  return (
    <div className="flex flex-col items-center bg-[#f9fafd]">
      <div className="w-[632px] h-screen bg-white">
        <div className="w-[632px] h-[81px] bg-[#432da2]">
          <IconButton className="ml-[17px] pt-[17px] flex flex-wrap">
            <Icon iconName="logo" width="40" />
            <div className="ml-[10px] mt-[2px] text-4xl text-left text-white">
              띵작교
            </div>
          </IconButton>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="pt-[5px]  w-[511px] h-[780px] absolute top-[112.5px] rounded-[27px] flex flex-col items-center bg-white"
            style={{ boxShadow: "0px 4px 20px 0 rgba(0,0,0,0.2)" }}
          >
            <p className="text-xl pt-[10px] ">새 프로필 생성</p>
            <svg
              className="pt-[5px]"
              width={100}
              height={150}
              viewBox="0 0 385 365"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <ellipse
                cx="192.5"
                cy="182.5"
                rx="192.5"
                ry="182.5"
                fill="#D9D9D9"
              />
            </svg>

            <input type="file" className="display- hidden" />
            <label
              htmlFor="profilePictureInput"
              className="cursor-pointer text-xs text-left pt-[10px] text-[#442da3]"
            >
              프로필 사진설정
            </label>

            <form className="w-500px " onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col ">
                <Input
                  labelText={"이름"}
                  type={"name"}
                  name={"name"}
                  placeHolder={"이름을 입력하세요"}
                  onChange={onChange}
                  value={values.name}
                  errorMessage={errors.name}
                />
              </div>
              <Input
                labelText={"학과"}
                type={"major"}
                name={"major"}
                placeHolder={"학과를 입력하세요"}
                onChange={onChange}
                value={values.major}
                errorMessage={errors.major}
              />
              <Input
                labelText={"소개글"}
                type={"selfIntro"}
                name={"selfIntro"}
                placeHolder={"소개글을 입력하세요"}
                onChange={onChange}
                value={values.selfIntro}
                errorMessage={errors.selfIntro}
              />

              <Input
                labelText={"나이"}
                type={"age"}
                name={"age"}
                placeHolder={"나이를 입력하세요"}
                onChange={onChange}
                value={values.age}
                errorMessage={errors.age}
              />

              <MBTICheck setMBTI={setMBTI} />

              <button className="w-[186px]  px-3 py-2 mt-6 text-xl font-medium ml-[100px] mb-[20px] text-[#442da3] bg-#ECE8FF rounded-lg hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-200 dark:hover:bg-purple-300 dark:focus:ring-purple-300">
                생성하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
