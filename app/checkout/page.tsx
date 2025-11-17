"use client";
import { useEffect, useState } from "react";
import CheckoutNavbar from "../components/checkout/CheckoutNavbar";
import PatternGoal from "../components/checkout/PatternGoal";
import BeforeAfter from "../components/checkout/BeforeAfter";
import SummaryList from "../components/checkout/SummaryList";

export default function CheckoutPage() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const gender =
    typeof window !== "undefined"
      ? localStorage.getItem("selectedGender") || "male"
      : "male";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#F7F7F7] font-sans text-gray-800">
      <CheckoutNavbar time={format(timeLeft)} />

      <section className="w-full max-w-md px-6 py-8">
        <h2 className="text-[22px] font-semibold text-gray-900 mb-6 text-left">
          Your personalized Alcohol-Free Plan is ready!
        </h2>

        <PatternGoal />

        <BeforeAfter gender={gender} />

        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          Your Personal Summary
        </h3>

        <SummaryList />
      </section>
    </main>
  );
}
