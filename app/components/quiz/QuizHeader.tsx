"use client";

import Logo from "../Logo";
import CustomArrowLeft from "./CustomArrowLeft";

export default function QuizHeader({
  step,
  total,
  onBack,
}: {
  step: number;
  total: number;
  onBack: () => void;
}) {
  return (
    <div className="w-full max-w-sm flex items-center justify-between mb-2">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center text-gray-800 hover:text-gray-900">
        <CustomArrowLeft />
      </button>

      {/* Logo */}
      <div className="scale-60">
        <Logo />
      </div>

      {/* Step Counter */}
      <div className="text-gray-800 text-lg leading-none">
        <span className="font-bold">{step}</span>
        <span className="font-normal">/{total}</span>
      </div>
    </div>
  );
}
