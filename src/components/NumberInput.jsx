import React, { useEffect, useState } from "react";
import IconButton from "./IconButton";
import Icon from "./Icon";

export default function NumberInput({
  number,
  setNumber,
  minNumber,
  maxNumber,
}) {
  const handlePlus = () => {
    if (number >= maxNumber) {
      return;
    } else {
      setNumber((prev) => prev + 1);
    }
  };

  const handleMinus = () => {
    if (number <= minNumber) {
      return;
    } else {
      setNumber((prev) => prev - 1);
    }
  };

  return (
    <div className="w-40 h-[42px] rounded-md border border-stone-300 flex items-center text-center">
      <IconButton
        type="button"
        className="h-full border-r-2 w-1/3 flex items-center justify-center"
        onClick={handleMinus}
      >
        <Icon iconName={"minus"}></Icon>
      </IconButton>
      <div className="w-1/3">{number}</div>
      <IconButton
        type="button"
        className="h-full border-l-2 w-1/3 flex items-center justify-center"
        onClick={handlePlus}
      >
        <Icon iconName={"plus"}></Icon>
      </IconButton>
    </div>
  );
}
