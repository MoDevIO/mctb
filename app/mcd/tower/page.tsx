"use client";

import Image from "next/image";
import { calcStage, calcTimeUntilNextLayout } from "./utils/calcStage";
import getTowerLayout from "./utils/getTowerLayout";

import { useState, useEffect, useRef } from "react";

let goneToBottom = false;
function toBottom() {
  if (goneToBottom) return;
  window.scrollTo(0, document.body.scrollHeight);
  goneToBottom = true;
}

export default function Tower() {
  const [date, setDate] = useState<Date | null>(null);
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    // if (!date) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActiveStage(index);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    stageRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [date]);

  useEffect(() => {
    if (activeStage === null) return;
    console.log("Selected stage:", activeStage);
  }, [activeStage]);

  if (!date) {
    return null;
  }

  const stage = calcStage(date);
  const timeUntilNextLayout = calcTimeUntilNextLayout(date);
  const layout = getTowerLayout(stage);

  return (
    <div className="p-10 flex flex-col">
      <div className="mb-[40vh]" />
      {layout?.stages.map((_, index) => {
        const stageIndex = layout.stages.length - index - 1;
        const isActive = activeStage === stageIndex;
        return (
          <div key={stageIndex} className="relative">
            <Image
              data-index={stageIndex}
              ref={(el) => {
                stageRefs.current[stageIndex] = el;
              }}

              src={`/images/mcd/tower_parts/tower_${index === 0 ? "top" : index === layout.stages.length - 1 ? "bottom" : "middle"}.png`}
              alt=""
              width={140}
              height={140}
              className={`[image-rendering:pixelated] mb-0 ml-auto transition-all duration-300 cursor-pointer ${
                isActive ? "brightness-110" : "brightness-75"
              }`}
              onClick={() => {
                stageRefs.current[stageIndex]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
              onLoad={toBottom}
            />
            <span
              className={`absolute -right-6 top-1/2 -translate-y-1/2 text-sm
                ${
                  isActive
                    ? "text-blue-400 font-bold"
                    : layout?.stages[stageIndex].boss
                      ? "text-red-300 font-black"
                      : layout.stages[stageIndex].merchant
                        ? "text-green-300 font-black"
                        : "text-(--foreground-secondary)"
                }`}
            >
              {stageIndex}
            </span>
          </div>
        );
      })}
      <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-10 bg-(--background-secondary) rounded-md min-w-120 text-center text-foreground">
        <span className="text-2xl">
          Floor: {activeStage !== null ? activeStage : ""}
        </span>
        {activeStage !== null && layout?.stages[activeStage] ? (
          <div className="text-center">
            <span
              className={`font-light text-(--foreground-secondary) ${
                layout.stages[activeStage].boss ? "text-red-300" : ""
              } ${layout.stages[activeStage].merchant ? "text-green-300" : ""}`}
            >
              {layout.stages[activeStage].boss
                ? "Boss: " + layout.stages[activeStage].bossName
                : layout.stages[activeStage].merchant
                  ? "Merchant: " + layout.stages[activeStage].merchantName
                  : layout.stages[activeStage].name}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mt-[40vh]" />
      <div className="fixed bottom-10 right-10 flex flex-col gap-1 bg-(--background-secondary) p-2 rounded-md text-foreground text-sm text-right">
        <span>
          Stages: <strong>{layout?.stages.length}</strong>
        </span>
        <span>
          New layout in <strong>{timeUntilNextLayout}</strong> day
          {timeUntilNextLayout !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="fixed bottom-10 left-10 flex flex-col gap-1 bg-(--background-secondary) p-4 rounded-md text-foreground text-sm">
        <span className="font-bold text-lg">Overview</span>
        <br className="mb-2" />
        <span className="text-red-300 font-bold">Bosses:</span>
        {layout?.stages
          .filter((stage) => stage.boss)
          .map((stage, index) => (
            <div key={index}>{stage.bossName}</div>
          ))}
        <br className="mb-2" />
        <span className="text-green-300 font-bold">Merchants:</span>
        {layout?.stages
          .filter((stage) => stage.merchant)
          .map((stage, index) => (
            <div key={index}>{stage.merchantName}</div>
          ))}
      </div>
    </div>
  );
}
