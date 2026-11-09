const startDate = Date.UTC(2022, 11, 11);
const numberOfStages = 30;

export function calcStage(date: Date): number {
  const targetDate = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const daysDiff = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));
  const weeksDiff = Math.floor(daysDiff / 7);

  return ((weeksDiff + 1) % numberOfStages) + 1;
}

export function calcTimeUntilNextStage(date: Date): number {
  const targetDate = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );

  const daysDiff = Math.floor((targetDate - startDate) / (1000 * 60 * 60 * 24));

  return 7 - (daysDiff % 7);
}
