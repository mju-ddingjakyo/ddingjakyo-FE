import React from "react";
import Icon from "./Icon";
import Input from "./Input";
import IconButton from "./button";

export default function setProfile() {
  return (
    <div className="flex flex-col items-center bg-[#f9fafd]">
      <div className="w-[632px] h-screen bg-white">
        <div className="w-[632px] h-[81px] bg-[#432da2]">
          <button className="ml-[17px] pt-[17px] flex flex-wrap">
            <Icon iconName="logo" width="40" />
            <div className="ml-[10px] mt-[2px] text-4xl text-left text-white">
              띵작교
            </div>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="pt-[10px] w-[511px] h-[750px] absolute top-[112.5px] rounded-[27px] flex flex-col items-center bg-white"
            style={{ boxShadow: "0px 4px 20px 0 rgba(0,0,0,0.2)" }}
          >
            <p className="text-xl pt-[10px] ">새 프로필 생성</p>
            <svg
              className="pt-[10px]"
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

            <form className="w-500px">
              <div className="flex flex-col">
                <Input
                  labelText="이름"
                  type="text"
                  name="name"
                  placeHolder="이름을 입력하세요"
                />
              </div>
              <Input
                labelText="학과"
                type="text"
                name="department"
                placeHolder="학과를 입력하세요"
              />
              <Input
                labelText="소개글"
                type="text"
                name="introduction"
                placeHolder="소개글을 입력하세요"
              />

              <Input
                labelText="나이"
                type="text"
                name="age"
                placeHolder="나이를 입력하세요"
              />

              <div className="mb-10">
                <label className="text-black pb-2 font-semibold">MBTI</label>
                <br />
                <div className="flex mt-10px pb-10px">
                  <div>
                    <IconButton>I</IconButton>
                    <IconButton>E</IconButton>
                  </div>
                  <div>
                    <IconButton>N</IconButton>
                    <IconButton>S</IconButton>
                  </div>
                  <div>
                    <IconButton>F</IconButton>
                    <IconButton>T</IconButton>
                  </div>
                  <div>
                    <IconButton>J</IconButton>
                    <IconButton>P</IconButton>
                  </div>
                </div>
              </div>

              <button className="px-3 py-2 text-xs font-medium ml-[150px] mb-[20px] text-purple-900 bg-purple-200 rounded-lg hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-200 dark:hover:bg-purple-400 dark:focus:ring-purple-500">
                생성하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
