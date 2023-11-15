import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function MyPage() {
  const userData = {
    data: {
      nickname: "김융소",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요. 융소의 자랑 김융소입니다.",
      age: 21,
      mbti: "ISTJ",
      profileImage: "https://via.placeholder.com/90x90",
    },
  };

  return (
    <div>
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center mt-32 w-[400px]">
          <img
            src={userData.data.profileImage}
            alt="프로필 이미지"
            className="rounded-full aspect-square"
          ></img>
          <div className="ml-8">
            <p className="text-[25px] font-bold text-left">
              {userData.data.nickname}
            </p>
            <button className="mt-4 text-[12px] w-[57.51px] h-[23.34px] rounded-[6.47px] bg-[#d6d6d6]">
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-10">
        <div className="flex justify-center items-center flex-col  w-[420px] h-[246.8px] rounded-[20.47px] bg-[#ECE8FF] text-[19px]  ">
          <div className="flex">
            <div className="text-[#aeaeae]">
              <p className="mb-2">학과 </p>
              <p className="mb-2">MBTI </p>
              <p className="mb-2">나이 </p>
              <p>소개 </p>
            </div>
            <div className="ml-8">
              <p className="mb-2">{userData.data.major}</p>
              <p className="mb-2">{userData.data.mbti}</p>
              <p className="mb-2">{userData.data.age}</p>
              <p>{userData.data.introduction}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center mt-4">
        <div className=" flex flex-col w-[400px] items-end">
          <button className=" w-[80.01px] h-[40.33px] rounded-[10.19px] bg-[#442da3] text-white">
            편집
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
