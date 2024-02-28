import React from "react";
import { Card, TitleSection } from "../../Atoms";

export default function ProductSection(props) {
  const { titleSection, titleMore, data } = props;
  return (
    <div>
      <TitleSection title={titleSection} titleMore={titleMore} />

      <div className="flex justify-between">
        {data.map((item, index) => (
          <Card key={index} className='w-[16%]' image={item.image} />
        ))}
      </div>
    </div>
  );
}
