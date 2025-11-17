import {
  HeartPulse,
  Handshake,
  Cog,
  Wallet,
  Gauge,
  Ribbon,
  CloudLightning,
  MessageCircle,
  Flower2,
  Smile,
  ClipboardList,
  Sparkles,
} from "lucide-react";

export const quizQuestions = [
  {
    question: "What is your main reason for wanting to quit drinking?",
    options: [
      ["Health", HeartPulse],
      ["Relationships", Handshake],
      ["Control", Cog],
      ["Money", Wallet],
      ["Performance", Gauge],
      ["Role model", Ribbon],
    ],
  },
  {
    question: "What do you think is the main reason you drink?",
    options: [
      ["Stress or anxiety", CloudLightning],
      ["Socializing", MessageCircle],
      ["Relaxation", Flower2],
      ["Emotional escape", Smile],
      ["Habit", ClipboardList],
      ["Confidence boost", Sparkles],
    ],
  },
];
