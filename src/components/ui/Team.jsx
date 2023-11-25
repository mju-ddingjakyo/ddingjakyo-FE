import React from "react";
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
  return (
    <div
      onClick={() => {
        navigate(`/team/${teamID}`);
      }}
      className="w-full h-32 bg-white rounded-[25px] shadow p-3 mb-3"
    >
      <div className="w-full flex items-center justify-between">
        <div className="text-stone-900 text-2xl font-bold py-1">{name}</div>
        <div
          className={`h-[30px] rounded-lg  text-center  ${
            match_status === "WAITING" ? "bg-blue-100" : "bg-red-300"
          }`}
        >
          <span
            className={`p-2 font-bold text-sm ${
              match_status === "WAITING" ? "text-cyan-700" : "text-red-950"
            }`}
          >
            {match_status === "WAITING" ? "대기중" : "거절됨"}
          </span>
        </div>
      </div>
      <div className="w-4/5 text-zinc-600 text-base font-medium py-1 truncate">
        {content}
      </div>
    </div>
  );
}
