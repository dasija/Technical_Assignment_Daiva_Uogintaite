"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizHeader from "../components/quiz/QuizHeader";
import ProgressBar from "../components/quiz/ProgressBar";
import AnswersList from "../components/quiz/AnswersList";

export default function QuizPage() {
  const router = useRouter();

  const questions = [
    {
      id: 1,
      text: "What is your main reason for wanting to quit drinking?",
      options: [
        "Health",
        "Relationships",
        "Control",
        "Money",
        "Performance",
        "Role model",
      ],
    },
    {
      id: 2,
      text: "What do you think is the main reason you drink?",
      options: [
        "Stress or anxiety",
        "Socializing",
        "Relaxation",
        "Emotional escape",
        "Habit",
        "Confidence boost",
      ],
    },
    {
      id: 3,
      text: 'Do you ever drink to feel "normal" or fit in with others?',
      options: ["Yes", "I'm not sure", "No"],
    },
    {
      id: 4,
      text: "Do you sometimes feel like you're missing out if you don't join social events?",
      options: ["Yes", "I'm not sure", "No"],
    },
    {
      id: 5,
      text: "Do you often want to escape responsibilities or pressures?",
      options: ["Yes", "I'm not sure", "No"],
    },
    {
      id: 6,
      text: "Do you often seek ways to relax after a long day?",
      options: ["Yes", "I'm not sure", "No"],
    },
  ];

  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);

  const current = questions[step - 1];

  const next = () => {
    if (step < questions.length) {
      setSelected(null);
      setStep(step + 1);
    } else {
      router.push("/checkout");
    }
  };

  return (
    <main className="flex flex-col items-center justify-start w-[375px] min-h-[640px] px-5 pb-5 gap-8 mx-auto bg-[#f9f6f4]">
      {/* Header */}
      <QuizHeader
        step={step}
        total={questions.length}
        onBack={() => (step > 1 ? setStep(step - 1) : router.back())}
      />

      {/* Question */}
      <h2 className="text-center text-[20px] font-semibold text-gray-800 mb-6 leading-tight">
        {current.text}
      </h2>

      {/* Answers */}
      <AnswersList
        options={current.options}
        step={step}
        selected={selected}
        onSelect={(option) => {
          setSelected(option);
          setTimeout(next, 700);
        }}
      />
    </main>
  );
}
