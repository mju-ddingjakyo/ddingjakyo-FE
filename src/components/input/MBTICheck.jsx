import React, { useState } from "react";

const mbtis = [
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
];

export default function MBTICheck({ mbti, setMBTI }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="w-full flex items-center justify-between">
      <div className="text-black text-xl font-bold">MBTI</div>
      <ul>
        <li
          onClick={() => {
            setDropdown(!dropdown);
          }}
          className="relative w-40 h-[42px] rounded-md border border-stone-300 flex items-center justify-center"
        >
          {mbti}
        </li>

        {dropdown ? (
          <div className="absolute h-48 overflow-auto z-10 bg-white ">
            {mbtis.map((mbti) => (
              <li
                key={mbti}
                onClick={(e) => {
                  setMBTI(e.target.textContent);
                  setDropdown(!dropdown);
                }}
                className=" py-3 w-40 h-[42px]  border border-stone-300 flex items-center justify-center cursor-pointer "
              >
                {mbti}
              </li>
            ))}
          </div>
        ) : null}
      </ul>
    </div>
  );
}
