"use client";

import HealthIcon from "./icons/HealthIcon";
import RelationshipsIcon from "./icons/RelationshipsIcon";
import ControlIcon from "./icons/ControlIcon";
import MoneyIcon from "./icons/MoneyIcon";
import PerformanceIcon from "./icons/PerformanceIcon";
import RoleModelIcon from "./icons/RoleModelIcon";
import StressOrAnxietyIcon from "./icons/StressOrAnxietyIcon";
import SocializingIcon from "./icons/SocializingIcon";
import RelaxationIcon from "./icons/RelaxationIcon";
import EmotionalEscapeIcon from "./icons/EmotionalEscapeIcon";
import HabitIcon from "./icons/HabitIcon";
import ConfidenceBoostIcon from "./icons/ConfidenceBoostIcon";
import SuccessIcon from "./icons/SuccessIcon";
import BlockIcon from "./icons/BlockIcon";
import QuestionIcon from "./icons/QuestionIcon";

const ICONS: Record<string, React.ReactNode> = {
  // STEP 1 icons
  Health: <HealthIcon />,
  Relationships: <RelationshipsIcon />,
  Control: <ControlIcon />,
  Money: <MoneyIcon />,
  Performance: <PerformanceIcon />,
  "Role model": <RoleModelIcon />,
  "Stress or anxiety": <StressOrAnxietyIcon />,
  Socializing: <SocializingIcon />,
  Relaxation: <RelaxationIcon />,
  "Emotional escape": <EmotionalEscapeIcon />,
  Habit: <HabitIcon />,
  "Confidence boost": <ConfidenceBoostIcon />,
  Yes: <SuccessIcon />,
  No: <BlockIcon />,
  "I'm not sure": <QuestionIcon />,
};

export default function AnswersList({
  options,
  step,
  selected,
  onSelect,
}: {
  options: string[];
  step: number;
  selected: string | null;
  onSelect: (value: string) => void;
}) {
  const getBorder = (option: string) => {
    if (option === "Yes") return "border-green-500";
    if (option === "No") return "border-red-500";
    if (option === "I'm not sure") return "border-yellow-400";
    return "border-gray-300";
  };

  const getSelectedStyle = (option: string) => {
    if (selected !== option) return "";

    if (step <= 2) return "bg-[#7B61FF] text-white border-[#7B61FF]";

    if (option === "Yes") return "bg-green-500 text-white border-green-500";
    if (option === "No") return "bg-red-500 text-white border-red-500";
    return "bg-yellow-400 text-white border-yellow-400";
  };

  return (
    <div className="flex flex-col w-full max-w-sm gap-3">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`flex items-center gap-3 border rounded-xl px-4 py-3 text-[16px]
            font-medium transition-all text-gray-700 hover:border-[#7B61FF]/60
            ${getBorder(option)} ${getSelectedStyle(option)}`}>
          {/* Icon on left */}
          <span className="w-[24px] flex items-center justify-center">
            {ICONS[option]}
          </span>

          {/* Label */}
          <span>{option}</span>
        </button>
      ))}
    </div>
  );
}
