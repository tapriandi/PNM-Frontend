import React from "react";

export default function Card(props) {
  const { className } = props;
  return <div className={[`${className} h-60 bg-gray-200`]}></div>;
}
