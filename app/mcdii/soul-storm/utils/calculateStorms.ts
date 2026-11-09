const stormOrder = [
  "Howling Woods",
  "Singer's Meadow",
  "Rainy Plains",
  "Humblers Huskland",
  "Lullaby Hills",
  "Frozen Highlands",
  "Honeycomb Fields",
];
const startInterval = 40 * 60 * 1000; // 40 minutes
const stormDuration = 20 * 60 * 1000; // 20 minutes
const startDate = Date.UTC(2026, 0, 1);

type Storm = {
  name: string;
  startTime: number;
  endTime: number;
};

function stormAt(slot: number): Storm {
  const startTime = startDate + slot * startInterval;
  return {
    name: stormOrder[slot % stormOrder.length],
    startTime,
    endTime: startTime + stormDuration,
  };
}

export default function calculateStorms(
  date: Date,
  upcomming = 3,
): {
  current: Storm | null;
  next: Storm[];
} {
  const slot = Math.floor((date.getTime() - startDate) / startInterval);

  let current: Storm | null = stormAt(slot);
  current = current.endTime > date.getTime() ? current : null;

  const next: Storm[] = [];
  for (let i = 1; i <= upcomming; i++) next.push(stormAt(slot + i));

  return { current, next };
}
