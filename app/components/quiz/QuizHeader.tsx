"use client";

import LogoSVG from "../LogoSVG";
import CustomArrowLeft from "./CustomArrowLeft";
import ProgressBar from "./ProgressBar";

export default function QuizHeader({
  step,
  total,
  onBack,
}: {
  step: number;
  total: number;
  onBack: () => void;
}) {
  // Apskaičiuojame progreso reikšmę
  const progressValue = (step / total) * 100;

  return (
    <div className="w-[335px] h-[72px] flex flex-col justify-between mx-auto mt-6 mb-6">
      {/* Botton */}
      <div className="flex items-center justify-between h-[36px]">
        {/* Arrow */}
        <button
          onClick={onBack}
          className="flex items-center justify-center text-gray-800 hover:text-gray-900"
          aria-label="Go back">
          <CustomArrowLeft />
        </button>

        <div className="flex items-center justify-center">
          <LogoSVG />
        </div>

        <div className="flex items-center justify-center text-gray-800 text-base leading-none">
          <span className="font-bold">{step}</span>
          <span className="font-normal">/{total}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full mt-2">
        <ProgressBar value={progressValue} />
      </div>
    </div>
  );
}
