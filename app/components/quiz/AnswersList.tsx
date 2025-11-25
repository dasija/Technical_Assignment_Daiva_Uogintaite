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
    return "border-[#F1F1F1]";
  };

  const getSelectedStyle = (option: string) => {
    if (selected !== option) return "";
    if (step <= 2) return "bg-[#7B61FF] text-white border-[#7B61FF]";
    if (option === "Yes") return "bg-green-500 text-white border-green-500";
    if (option === "No") return "bg-red-500 text-white border-red-500";
    return "bg-yellow-400 text-white border-yellow-400";
  };

  return (
    <div className="flex flex-col w-[335px] gap-3 mx-auto">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`flex items-center gap-[12px] w-[335px] h-[56px]
            px-[12px] py-[16px] rounded-[8px] border bg-white 
            transition-all duration-200 hover:border-[#7B61FF]/60
            ${getBorder(option)} ${getSelectedStyle(option)}`}>
          {/* Icon */}
          <span className="w-[24px] flex items-center justify-center">
            {ICONS[option]}
          </span>

          {/* Label */}
          <span className="font-figtree font-semibold text-[16px] leading-[20px] text-gray-800 tracking-normal">
            {option}
          </span>
        </button>
      ))}
    </div>
  );
}
