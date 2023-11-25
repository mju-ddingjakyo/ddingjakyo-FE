import React from "react";
import Header from "../../components/ui/Header";
import Footer from "../../components/ui/Footer";
import mainLogo from "../../assets/mainLogo.svg";
import { Link } from "react-router-dom";
import Icon from "../../components/icon/Icon";

export default function NotLogin() {
  return (
    <div className="h-full">
      <Header></Header>
      <div className="flex flex-col h-5/6 w-full items-center justify-center bg-gradient-to-b from-indigo-800 via-indigo-600 to-violet-400">
        <Icon iconName={mainLogo}></Icon>
        <div className="text-center text-white mt-10">
          <div className=" text-3xl font-bold py-3">
            로그인 후 이용해 주세요
          </div>
          <div className="text-xl">
            <span>띵작교를 이용하기 위해서는</span>
            <br />
            <span>로그인이 필요해요.</span>
          </div>
          <Link to={"/login"}>
            <button className=" p-3 text-white text-xl bg-violet-800 rounded-lg  hover:bg-violet-400 my-3">
              로그인 하러 가기
            </button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
