import React, { use } from "react";
import type { ttype } from "../../types/technologyType";
import AvailableTechnology from "./AvailableTechnology";

interface TechnologyProps {
  technologyPromise: Promise<ttype[]>;
}

const Technologies = ({ technologyPromise }: TechnologyProps) => {
  const technologies = use(technologyPromise);
  console.log(technologies);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mb-2">
        <div>
        <h2 className="font-bold text-4xl">Explore the <span className="text-purple-500">Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
        </div>
        <div>
        <h2 className="font-bold">Your Stack</h2>
        <p className="mt-0.5 min-h-[60px] text-sm leading-6 text-gray-500">No technologies selected yet</p>
      </div>
      </div>
      <AvailableTechnology technologies={technologies} />
    </div>
  );
};

export default Technologies;
