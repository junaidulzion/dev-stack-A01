import React, { useState } from "react";
import type { ttype } from "../types/technologyType";

const TechnologyCard = ({ technology }: { technology: ttype }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      key={technology.id}
      className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {technology.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{technology.name}</h2>
        </div>

        <p className="mt-3 min-h-[60px] text-sm leading-6 text-gray-500">
          {technology.description}
        </p>
      </div>

      {/* Rating & Difficulty */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="text-right">
          <span className="rounded-md bg-gray-100 px-1 py-1 text-xs font-medium text-gray-600 text-center">
            {technology.category}
          </span>

          <span className="mt-1 pl-[18px] text-sm text-gray-700">
            {technology.difficulty}
          </span>
        </div>
        <div>
          <div className="mt-1 flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold text-gray-800">
              {technology.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => setIsSelected(true)}
        disabled={isSelected === true ? true : false}
        className="mt-5 w-full rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isSelected === true ? "Selected" : "Add to Stack"}
      </button>
    </div>
    
  );
};

export default TechnologyCard;
