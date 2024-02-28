import React from "react";
import { Card, TitleSection } from "../../Atoms";

export default function ProductSection(props) {
  const { titleSection, titleMore } = props;
  return (
    <div>
      <TitleSection title={titleSection} titleMore={titleMore} />

      <div className="flex justify-between">
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          <Card key={index} className='w-[16%]' />
        ))}
      </div>
    </div>
  );
}
