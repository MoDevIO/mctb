"use client";

import Image from "next/image";
import calculateStorms from "./utils/calculateStorms";
import { useState, useEffect } from "react";
import SoulStormCard from "@/app/components/soul-storm";

function formatTime(ms: number): string {
  return `${Math.floor(ms / 60000)
    .toString()
    .padStart(2, "0")}:${Math.floor((ms % 60000) / 1000)
    .toString()
    .padStart(2, "0")}`;
}

function timeUntilDate(date: Date): number {
  const now = new Date();
  return Math.max(0, date.getTime() - now.getTime());
}

function formatDate(date: Date): string {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getLocationIcon(location: string): string {
  const newLocation = String(location)
    .replaceAll(" ", "-")
    .replaceAll("'", "")
    .toLowerCase();
  if (location === "none") return "/images/mcdii/soul_storm_grey.png";
  return `/images/mcdii/location_icons/${newLocation}.png`;
}

export default function SoulStorm() {
  const [date, setDate] = useState<Date | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [currentStorm, setCurrentStorm] = useState<{
    name: string;
    startTime: number;
    endTime: number;
  } | null>(null);
  const [nextStorms, setNextStorms] = useState<
    {
      name: string;
      startTime: number;
      endTime: number;
    }[]
  >([]);
  {
    useEffect(() => {
      function update() {
        const now = new Date();
        const storms = calculateStorms(now);
        setDate(now);

        setCurrentStorm(storms.current);
        setNextStorms(storms.next);

        setTimeRemaining(
          storms.current?.endTime
            ? Math.max(0, storms.current.endTime - now.getTime())
            : 0,
        );
      }

      update();

      const interval = setInterval(update, 1000);

      return () => clearInterval(interval);
    }, []);

    if (!date) return null;

    console.log(
      "src:" + getLocationIcon(calculateStorms(date).current?.name || "none"),
    );
    return (
      <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-10 text-[#23E5E3]">
          Soul Storms Live Tracker
        </h1>

        <SoulStormCard
          location={currentStorm?.name || "None"}
          icon={getLocationIcon(currentStorm?.name || "none")}
          timeRemaining={formatTime(timeRemaining)}
          startsAt={""}
          startsIn={""}
        />
        {nextStorms.map((storm, index) => (
          <SoulStormCard
            key={index}
            location={storm.name}
            icon={getLocationIcon(storm.name)}
            timeRemaining={""}
            startsAt={formatDate(new Date(storm.startTime))}
            startsIn={formatTime(timeUntilDate(new Date(storm.startTime)))}
          />
        ))}
      </div>
    );
  }
}
