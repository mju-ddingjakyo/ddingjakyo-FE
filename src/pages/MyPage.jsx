import React, { useEffect, useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Modal from "../components/modal/Modal";
import useModal from "../customHook/useModal";
import ModifyProfile from "../components/modal/ModifyProfile";
import { getMy } from "../utility/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import NotLogin from "./auth/NotLogin";
import { ReactComponent as EditIcon } from "../assets/edit.svg"
import { useNavigate } from "react-router-dom";
import { logout } from "../utility/api";
export default function MyPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["myInfo"],
    queryFn: () => getMy(localStorage.getItem("JSESSIONID")),
  });

  const mutation = useMutation({
    mutationFn: logout, onSuccess: () => {
      localStorage.clear();
      navigate("/")
    }, onError: (err) => {
      console.log(err)
    }
  });

  const { visibility, openModal, closeModal } = useModal();
  const [myData, setMyData] = useState();
  const [status, setStatus] = useState();
  const [cookie] = useCookies(['JSESSIONID']);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(data?.data?.data)
    data ? setMyData(data?.data?.data) : setMyData();
    setStatus(error?.response.status);
  }, [data, error]);

  const handleLogOut = () => {
    mutation.mutate();
  }
  return (
    <>
      {status === 401 ? <NotLogin></NotLogin> :
        <div>
          <Header />
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center w-[400px] mt-5">
              <img
                src={myData?.profileImage}
                alt="프로필 이미지"
                className="rounded-full aspect-square w-[240px] h-[240px] object-cover"
              ></img>
              <button onClick={handleLogOut} className="text-white bg-violet-600 rounded-md p-3 absolute top-0 right-7 hover:bg-violet-400">로그아웃</button>
            </div>
          </div>

          <div className="w-full flex flex-col items-center mt-10">
            <div className="relative flex justify-center items-center flex-col  w-[510px] h-[346.8px] rounded-[20.47px] bg-[#ECE8FF] text-[24px]  ">
              <div className="flex">
                <div className="text-[#aeaeae]">
                  <p className="mb-6">이름 </p>
                  <p className="mb-6">학과 </p>
                  <p className="mb-6">MBTI </p>
                  <p className="mb-6">나이 </p>
                  <p>소개 </p>
                </div>
                <EditIcon onClick={openModal} className="absolute right-10 top-3" />
                <div className="ml-8">
                  <p className="mb-6">{myData?.nickname}</p>
                  <p className="mb-6">{myData?.major}</p>
                  <p className="mb-6">{myData?.mbti}</p>
                  <p className="mb-6">{myData?.age}</p>
                  <p>{myData?.introduction}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col items-center mt-4">
            <Modal closeModal={closeModal} visibility={visibility}>
              <ModifyProfile
                closeModal={closeModal}
                userData={myData}
              ></ModifyProfile>
            </Modal>
          </div>

          <Footer></Footer>
        </div>
      }
    </>
  );
}
