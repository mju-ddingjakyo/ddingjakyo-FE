import React from "react";

export default function Input({
  labelText,
  type,
  placeHolder,
  onChange,
  value,
  width = "w-72",
}) {
  return (
    <div className="flex flex-col mb-5 ">
      <label htmlFor="email" className="text-white pb-2">
        {labelText}
      </label>
      <input
        type={type}
        id={type}
        name={type}
        placeholder={placeHolder}
        className={`${width} h-12 border-white outline-none rounded-lg`}
        onChange={onChange}
        value={value}
      ></input>
    </div>
  );
}
