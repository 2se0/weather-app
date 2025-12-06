import { useState } from "react";

export default function SearchInput({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="도시명을 입력하세요 (예: 서울, 부산, 도쿄)"
        className="flex-1 rounded-lg border border-slate-300 p-2 text-sm focus:border-sky-500 focus:outline-none"
      />
      <button
        onClick={() => value && onSearch(value)}
        className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
      >
        검색
      </button>
    </div>
  );
}
