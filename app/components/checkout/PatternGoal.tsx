import { Brain, Target } from "lucide-react";

export default function PatternGoal() {
  return (
    <div className="flex justify-around items-center mb-6">
      {/* Left block */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 border-2 border-[#7B61FF] rounded-lg">
          <Brain className="text-[#7B61FF]" size={22} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm text-gray-500">Drinking patterns</span>
          <span className="font-semibold text-gray-900">Imbalanced</span>
        </div>
      </div>

      <div className="w-[1px] h-10 bg-[#C4BFFF]" />

      {/* Right block */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 border-2 border-[#7B61FF] rounded-lg">
          <Target className="text-[#7B61FF]" size={22} />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm text-gray-500">Goal</span>
          <span className="font-semibold text-gray-900 leading-snug">
            Regain control and <br /> live alcohol-free
          </span>
        </div>
      </div>
    </div>
  );
}
