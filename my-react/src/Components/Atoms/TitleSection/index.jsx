import React from "react";

export default function TitleSection(props) {
  const { title, titleMore } = props;

  return (
    <div className="flex items-center pt-10 pb-5 justify-between">
      <h1 className="text-lg font-bold">{title}</h1>
      <a className="text-sm">{titleMore}</a>
    </div>
  );
}
