import React from "react";

export default function IconButton({ children, ...rest }) {
  return (
    <button type="button " {...rest}>
      {children}
    </button>
  );
}
