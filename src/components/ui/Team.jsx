import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Team({
  name,
  content,
  member_count,
  match_status,
  members_profile,
  teamID,
  gender
}) {
  const navigate = useNavigate();

  function teamStatus() {
    if (match_status === "POSSIBLE") {
      return (<div className="w-12 h-6 rounded-lg  text-center bg-sky-300"><p className="text-white">모집중</p></div>)
    }
    if (match_status === "IMPOSSIBLE") {
      return (<div className="h-[30px] rounded-lg  text-center bg-slate-300"><span className="text-slate-600">완료됨</span></div>)
    }
  }

  return (
    <div
      onClick={() => {
        navigate(`/team/${teamID}`);
      }}
      className="w-full h-32 bg-white rounded-[25px] shadow p-3 mb-3"
    >
      <div className="w-full flex items-center justify-between">
        <div className="text-stone-900 text-2xl font-bold py-1">{name}</div>
        {teamStatus()}
      </div>
      <div className="w-4/5 text-zinc-600 text-base font-medium py-1 truncate">
        {content}
      </div>
      <div className="flex mt-1 items-center">
        {members_profile.map((profile) => (
          <img src={`${profile.profileImage}`} className="w-8 h-8 rounded-full object-cover mr-1"></img>
        ))}
        <p className="text-md text-slate-600 ml-2">멤버 {member_count}명({gender === 0 ? "남성" : "여성"})</p>
      </div>
    </div>
  );
}
