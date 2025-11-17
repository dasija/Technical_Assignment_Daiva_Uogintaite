export default function SummaryCard({
  icon,
  tag,
  color,
  label,
  percent,
}: {
  icon: React.ReactNode;
  tag: string;
  color: string;
  label: string;
  percent: number;
}) {
  return (
    <div className="flex flex-col border-2 border-[#C4BFFF] rounded-xl p-3 bg-white shadow-sm">
      <div className="flex flex-col mb-2">
        <span
          className={`self-start text-[10px] font-semibold text-white px-2 py-[2px] rounded mb-1 ${
            color === "bg-green-500"
              ? "bg-green-600"
              : color === "bg-yellow-400"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}>
          {tag}
        </span>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-800 font-medium">
            {icon}
            <span>{label}</span>
          </div>
          <span className="text-xs text-gray-600">{percent}%</span>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
        <div
          className={`${color} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${percent}%` }}></div>
      </div>

      <span className="text-xs text-gray-600 text-right">{percent}%</span>
    </div>
  );
}
