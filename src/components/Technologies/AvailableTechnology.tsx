import React from "react";
import type { ttype } from "../../types/technologyType";
import TechnologyCard from "../TechnologyCard";
// import { GrTechnology } from 'react-icons/gr';

const AvailableTechnology = ({ technologies }) => {
  return (
    <div className="grid grid-cols-3 gap-6 w-[75%]">
      {technologies.map((technology: ttype, ind: number) => {
        return <TechnologyCard key={ind} technology={technology} />;
      })}
    </div>
  );
};

export default AvailableTechnology;
