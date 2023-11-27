import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Team({
  name,
  content,
  member_count,
  match_status,
  member_profile,
  teamID,
}) {
  const navigate = useNavigate();
  const [statusText, setStatusText] = useState();

  function teamStatus() {
    if (match_status === "POSSIBLE") {
      return (<div className="h-[30px] rounded-lg  text-center bg-sky-300"><span className="text-white">모집중</span></div>)
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
    </div>
  );
}
