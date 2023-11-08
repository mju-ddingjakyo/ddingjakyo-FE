import React, { useState } from "react";

export default function GenderCheck({ setGender }) {
  const [maleChecked, setMaleChecked] = useState(true);
  const [femaleChecked, setFeMaleChecked] = useState(false);
  return (
    <div className="w-full flex ">
      <div className="text-xl font-bold">성별</div>
      <div className="flex ml-auto">
        <div className="px-5">
          <input
            type="checkbox"
            id="male"
            value={0}
            className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
            checked={maleChecked}
            onChange={(e) => {
              setGender(e.target.value);
              setMaleChecked(true);
              setFeMaleChecked(false);
            }}
          />
          <label htmlFor="male" className="text-lg">
            남자
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="female"
            className="appearance-none w-3 h-3 border-2 rounded-full checked:bg-slate-600 mr-1"
            value={1}
            checked={femaleChecked}
            onChange={(e) => {
              setGender(e.target.value);
              setMaleChecked(false);
              setFeMaleChecked(true);
            }}
          />
          <label htmlFor="female" className="text-lg">
            여자
          </label>
        </div>
      </div>
    </div>
  );
}
