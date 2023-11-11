import React from "react";

export default function Icon({ iconName, width }) {
  return <img src={iconName} alt={"이미지"} className={width} />;
}
