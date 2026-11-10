"use client";

function formatInput(input: string): string {
  return input
    .replace(/^ /, "")
    .replaceAll(",", " ")
    .replaceAll("/", " ")
    .replace(/[^0-9 -]/g, "")
    .replace(/ {2,}/g, " ")
    .split(" ")
    .slice(0, 3)
    .join(" ");
}
function calculateCoords(coords: string, to: string): string {
  const length = coords.split(" ").length;
  const factor = to === "nether" ? 1 / 8 : 8;
  if (coords.trim() === "") {
    return "";
  }
  return coords
    .split(" ")
    .map((coord, index) => {
      if (Number.isNaN(Number(coord))) {
        return "-";
      }
      if (index === 0 || index === 2 || length !== 3) {
        return Math.floor(Number(coord) * factor).toString();
      } else {
        return coord;
      }
    })
    .join(" ");
}

function handleOverworldChange(event: React.ChangeEvent<HTMLInputElement>) {
  const overworldInput = event.target.value;
  const netherInput = document.getElementById("nether") as HTMLInputElement;

  event.target.value = formatInput(formatInput(overworldInput));
  netherInput.value = calculateCoords(formatInput(overworldInput), "nether");
}

function handleNetherChange(event: React.ChangeEvent<HTMLInputElement>) {
  const netherInput = event.target.value;
  const overworldInput = document.getElementById(
    "overworld",
  ) as HTMLInputElement;

  event.target.value = formatInput(formatInput(netherInput));
  overworldInput.value = calculateCoords(formatInput(netherInput), "overworld");
}

export default function NetherCalc() {
  return (
    <div className="flex flex-col gap-4 p-10 items-center mt-10">
      <span className="text-3xl">Overworld: </span>
      <input
        className="outline-none border-transparent border-3 focus:border-blue-400
        bg-(--background-secondary) p-2 rounded-md w-fit text-center text-blue-500
        mb-10"
        type="text"
        id="overworld"
        placeholder="Enter coordinates"
        onChange={handleOverworldChange}
      />
      <br />
      <span className="text-3xl">Nether: </span>
      <input
        className="outline-none border-transparent border-3 focus:border-orange-400
        bg-(--background-secondary) p-2 rounded-md w-fit text-center text-orange-500"
        type="text"
        id="nether"
        placeholder="Enter coordinates"
        onChange={handleNetherChange}
      />
    </div>
  );
}
