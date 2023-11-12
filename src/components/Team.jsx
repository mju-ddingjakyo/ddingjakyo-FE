import React from "react";

export default function Team({
  name,
  content,
  member_count,
  match_status,
  member_profile,
}) {
  return (
    <div className="w-full h-32 bg-white rounded-[25px] shadow p-3 mb-3">
      <div className="w-full flex items-center justify-between">
        <div className="text-stone-900 text-2xl font-bold py-1">{name}</div>
        <div className="h-[30px] bg-blue-100 rounded-lg  text-center">
          <span className="p-2 font-bold text-sm text-cyan-600">대기중</span>
        </div>
      </div>
      <div className="w-4/5 text-zinc-600 text-base font-medium py-1 truncate">
        {content}
      </div>
    </div>
  );
}
