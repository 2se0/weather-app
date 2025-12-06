import { getOutfitByTemp } from "@/utils/temperature";

export default function OutfitCard({ temp }: { temp: number }) {
  const outfit = getOutfitByTemp(temp);

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">기온별 옷차림</p>
      <p className="text-base font-semibold">
        지금 {temp}℃ 에는 이런 옷이 좋아요
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {outfit.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
