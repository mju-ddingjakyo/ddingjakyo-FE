import React from "react";

export default function Icon({ iconName, width }) {
  return (
    <img
      src={process.env.PUBLIC_URL + `/assets/${iconName}.svg`}
      alt={"이미지"}
      className={width}
    />
  );
}
