"use client";

import Image from "next/image";

export default function GenderCard({
  type,
  selected,
  onSelect,
}: {
  type: "male" | "female";
  selected: string | null;
  onSelect: (gender: string) => void;
}) {
  const isActive = selected === type;
  const label = type === "male" ? "Male" : "Female";
  const img = `/images/${type}.jpg`;

  return (
    <button
      onClick={() => onSelect(type)}
      className={`flex flex-col items-center border-2 rounded-2xl w-46 h-56 overflow-hidden transition-all duration-200 shadow-sm
        ${
          isActive
            ? "border-[#7B61FF] bg-[#7B61FF] text-white"
            : "border-gray-300 bg-white text-gray-700 hover:border-[#7B61FF]/60"
        }`}>
      <div className="w-full h-[70%]">
        <Image
          src={img}
          alt={label}
          width={140}
          height={140}
          unoptimized
          className="object-cover h-full w-full"
        />
      </div>

      <div
        className={`w-full h-[30%] flex items-center justify-center font-semibold text-[16px]
          ${isActive ? "bg-[#7B61FF] text-white" : "bg-white text-gray-700"}`}>
        {label}
      </div>
    </button>
  );
}
