import React from "react";
import { NavLink } from "react-router-dom";
export default function FooterIcon({ to, children, active, setActive, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        isActive ? setActive(true) : setActive(false);
      }}
    >
      <div className="flex flex-col items-center">
        {children}
        <div
          className={`text-xl font-medium ${
            active ? "text-black" : "text-neutral-500"
          }`}
        >
          {text}
        </div>
      </div>
    </NavLink>
  );
}
