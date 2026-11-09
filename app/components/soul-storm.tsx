import Image from "next/image";

export default function SoulStormCard({
  location,
  icon,
  timeRemaining, // For active storms
  startsAt, // For upcoming storms
  startsIn, // For upcoming storms
}: {
  location: string;
  icon: string;
  timeRemaining: string;
  startsAt: string;
  startsIn: string;
}) {
  return (
    <div
      className={`flex gap-3 min-w-120 mb-2 bg-(--background-secondary) p-3 rounded-lg border-none ${location === "None" ? "scale-75 text-gray-600 mb-[-2]" : "scale-100"} transition-transform`}
    >
      <Image
        src={icon}
        className="[image-rendering:pixelated] "
        alt=""
        width={64}
        height={64}
      />
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-2xl font-bold text-center">
          {location !== "None" ? location : "No Soul Storm active"}
        </span>
        <span className="text-md font-light text-(--foreground-secondary) text-center">
          {timeRemaining === "" || timeRemaining === "00:00"
            ? ""
            : `Time Remaining: ${timeRemaining}`}
        </span>
        <span className="text-md font-light text-(--foreground-secondary) text-center">
          {startsAt === "" ? "" : `Starts in: ${startsIn} (${startsAt})`}{" "}
        </span>
      </div>
    </div>
  );
}
