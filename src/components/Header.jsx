import React from "react";
import IconButton from "./IconButton";
import Icon from "./Icon";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-[632px] h-[81px] bg-[#432da2]">
      <IconButton
        onClick={() => {
          navigate("/");
        }}
        className="ml-[17px] pt-[17px] flex flex-wrap"
      >
        <Icon iconName={logo} width="40" />
        <div className="ml-[10px] mt-[2px] text-4xl text-left text-white">
          띵작교
        </div>
      </IconButton>
    </div>
  );
}
