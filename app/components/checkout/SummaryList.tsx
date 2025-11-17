import { Lightbulb, Flame, CircleSlash, Zap } from "lucide-react";
import SummaryCard from "./SummaryCard";

export default function SummaryList() {
  const items = [
    {
      icon: <Lightbulb size={18} className="text-[#7B61FF]" />,
      tag: "VERY STRONG",
      color: "bg-green-500",
      label: "Desire to change",
      percent: 92,
    },
    {
      icon: <Flame size={18} className="text-[#7B61FF]" />,
      tag: "TOO HIGH",
      color: "bg-red-500",
      label: "Cravings",
      percent: 84,
    },
    {
      icon: <CircleSlash size={18} className="text-[#7B61FF]" />,
      tag: "TOO HIGH",
      color: "bg-red-400",
      label: "Mental blocks",
      percent: 74,
    },
    {
      icon: <Zap size={18} className="text-[#7B61FF]" />,
      tag: "MODERATELY HIGH",
      color: "bg-yellow-400",
      label: "Stress",
      percent: 52,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <SummaryCard key={i} {...item} />
      ))}
    </div>
  );
}
