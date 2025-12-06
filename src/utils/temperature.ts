import { outfitTable } from "@/data/outfitTable";

export function getOutfitByTemp(temp: number) {
  return (
    outfitTable.find((entry) => temp >= entry.min) ??
    outfitTable[outfitTable.length - 1]
  );
}
