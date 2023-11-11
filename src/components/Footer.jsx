import React, { useReducer, useState } from "react";
import IconButton from "./IconButton";
import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Team } from "../assets/team.svg";
import { ReactComponent as Match } from "../assets/matching.svg";
import { ReactComponent as Mypage } from "../assets/myPage.svg";
import FooterIcon from "./FooterIcon";

export default function Footer() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  return (
    <div className="w-[632px] h-[95px] bg-violet-100 shadow absolute bottom-0 flex justify-around items-center">
      <FooterIcon to="/" active={active} setActive={setActive} text={"홈"}>
        <Home className={`${active ? "fill-black" : "fill-slate-500"}`} />
      </FooterIcon>

      <FooterIcon
        to="/myteam"
        active={active1}
        setActive={setActive1}
        text={"마이팀"}
      >
        <Team className={`${active1 ? "fill-black" : "fill-slate-500"}`} />
      </FooterIcon>

      <FooterIcon
        to="/match"
        active={active2}
        setActive={setActive2}
        text={"매칭조회"}
      >
        <Match className={`${active2 ? "fill-black" : "fill-slate-500"}`} />
      </FooterIcon>

      <FooterIcon
        to="/mypage"
        active={active3}
        setActive={setActive3}
        text={"마이 페이지"}
      >
        <Mypage className={`${active3 ? "fill-black" : "fill-slate-500"}`} />
      </FooterIcon>
    </div>
  );
}
