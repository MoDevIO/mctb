"use client";

import { calcStage, calcTimeUntilNextStage } from "./utils/calcStage";
import getTowerLayout from "./utils/getTowerLayout";

import { useState, useEffect } from "react";

export default function Tower() {
  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    setDate(new Date());
  }, []);
  if (!date) {
    return <div>Loading...</div>;
  }

  const stage = calcStage(date);
  const timeUntilNextStage = calcTimeUntilNextStage(date);
  const layout = getTowerLayout(stage);

  return (
    <div className="p-10">
      <h1 className="text-2xl">The Tower - Stage {stage}</h1>
      <p className="text-md">
        Time until next stage: {timeUntilNextStage} day
        {timeUntilNextStage !== 1 ? "s" : ""}
      </p>

      <ul className="mt-4">
        {layout?.stages.map((floor, index) => (
          <li key={index} className="mb-2">
            <div className="flex items-center">
              <span className="mr-2 font-bold">Floor {index + 1}:</span>
              <span
                className={`
                  font-light text-(--foreground-secondary)
                  ${floor.boss ? "text-red-300" : ""}
                  ${floor.merchant ? "text-green-300" : ""}
                `}
              >
                {floor.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
