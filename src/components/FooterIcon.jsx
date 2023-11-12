import React from "react";

export default function FooterIcon({ children, isActive, text }) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <div
        className={`text-xl font-medium ${
          isActive ? "text-black" : "text-neutral-500"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
