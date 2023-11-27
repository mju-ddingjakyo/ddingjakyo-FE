import React, { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Modal from "../components/modal/Modal";
import useModal from "../customHook/useModal";
import ModifyProfile from "../components/modal/ModifyProfile";
import { getMy } from "../utility/api";
import { useQuery } from "@tanstack/react-query";

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
export default function MyPage() {
  const { visibility, openModal, closeModal } = useModal();
  const [myData, setMyData] = useState();

  const { data } = useQuery({
    queryKey: ["myInfo"],
    queryFn: getMy,
  });

  useEffect(() => {
    data ? setMyData(data) : setMyData(userData.data);
  }, [data]);

  return (
    <div>
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center mt-28 w-[430px]">
          <img
            src={myData?.profileImage}
            alt="프로필 이미지"
            className="rounded-full aspect-square w-[120px] h-[120px]"
          ></img>
          <div className="ml-8">
            <p className="text-[28px] font-bold text-left">
              {myData?.nickname}
            </p>
            <button className="mt-4 text-[16px] w-[74.51px] h-[30.34px] rounded-[6.47px] bg-[#d6d6d6]">
              로그아웃
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-10">
        <div className="flex justify-center items-center flex-col  w-[510px] h-[346.8px] rounded-[20.47px] bg-[#ECE8FF] text-[24px]  ">
          <div className="flex">
            <div className="text-[#aeaeae]">
              <p className="mb-6">학과 </p>
              <p className="mb-6">MBTI </p>
              <p className="mb-6">나이 </p>
              <p>소개 </p>
            </div>
            <div className="ml-8">
              <p className="mb-6">{myData?.major}</p>
              <p className="mb-6">{myData?.mbti}</p>
              <p className="mb-6">{myData?.age}</p>
              <p>{myData?.introduction}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center mt-4">
        <div className=" flex flex-col w-[470px] items-end">
          <button
            onClick={openModal}
            className=" w-[82.01px] h-[40.33px] rounded-[10.19px] bg-[#442da3] text-white"
          >
            편집
          </button>
        </div>

        <Modal closeModal={closeModal} visibility={visibility}>
          <ModifyProfile
            closeModal={closeModal}
            userData={myData}
          ></ModifyProfile>
        </Modal>
      </div>

      <Footer></Footer>
    </div>
  );
}
