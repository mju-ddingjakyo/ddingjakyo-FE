import React from "react";

export default function Input({
  labelText,
  type,
  name,
  placeHolder,
  onChange,
  value,
  errorMessage,
  width = "w-[386px]",
}) {
  return (
    <div className="flex flex-col mb-5 ">
      <label htmlFor={name} className="text-black pb-2 font-semibold">
        {labelText}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeHolder}
        className={`${width} h-[55px] rounded-md border border-stone-300 outline-none placeholder:text-stone-300 text-xl pl-5`}
        onChange={onChange}
        spellCheck={false}
        value={value}
      />
      <strong className="text-red-400 text-sm font-light h-3">
        {errorMessage}
      </strong>
    </div>
  );
}
