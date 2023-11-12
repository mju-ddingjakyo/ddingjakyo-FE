import React, { useState } from "react";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Team } from "../assets/team.svg";
import { ReactComponent as Match } from "../assets/matching.svg";
import { ReactComponent as Mypage } from "../assets/myPage.svg";
import FooterIcon from "./FooterIcon";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-[632px] h-[95px] bg-violet-200 shadow absolute bottom-0 flex justify-around items-center">
      <NavLink to={"/"}>
        {({ isActive, isPendeing }) => (
          <FooterIcon isActive={isActive} text={"홈"}>
            <Home className={isActive ? "fill-black" : "fill-neutral-500"} />
          </FooterIcon>
        )}
      </NavLink>

      <NavLink to={"/myteam"}>
        {({ isActive, isPendeing }) => (
          <FooterIcon isActive={isActive} text={"마이 팀"}>
            <Team className={isActive ? "fill-black" : "fill-neutral-500"} />
          </FooterIcon>
        )}
      </NavLink>

      <NavLink to={"/match"}>
        {({ isActive, isPendeing }) => (
          <FooterIcon isActive={isActive} text={"매칭 조회"}>
            <Match className={isActive ? "fill-black" : "fill-neutral-500"} />
          </FooterIcon>
        )}
      </NavLink>

      <NavLink to={"/mypage"}>
        {({ isActive, isPendeing }) => (
          <FooterIcon isActive={isActive} text={"마이 페이지"}>
            <Mypage className={isActive ? "fill-black" : "fill-neutral-500"} />
          </FooterIcon>
        )}
      </NavLink>
    </footer>
  );
}
