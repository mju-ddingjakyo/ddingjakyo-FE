import React from "react";

export default function Profile({ img, name,email  }) {
  return (
    <div className="flex item-center mb-8">
      <img
        className="
        w-24
        h-24
        rounded-full"
        src={img}
        alt="프로필 이미지"
      ></img>
      <div className="ml-5">
        <div className="text-2xl font-semibold">{name}</div>
        <div className="text-zinc-600 text-lg font-medium ">
         {email}
        </div>
      </div>
    </div>
  );
}
