import { towerStages } from "../data/towerStages";

export default function getTowerLayout(index: number) {
  const layouts = towerStages.flatMap((season) => season.layouts);
  const layout = layouts[index - 1];

  if (!layout) return null;

  return layout;
}
