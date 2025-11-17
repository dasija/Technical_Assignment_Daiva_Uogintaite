"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../components/Logo";
import GenderCard from "../components/GenderCard";

export default function LandingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (gender: string) => {
    setSelected(gender);
    localStorage.setItem("selectedGender", gender);
    setTimeout(() => router.push("/quiz"), 800);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9F6F3] px-6 text-center font-['Nunito']">
      {/* LOGO */}
      <div className="scale-60 absolute top-1 left-1/2 -translate-x-1/2">
        <Logo />
      </div>

      <h2 className="text-[22px] font-bold text-gray-800 mb-2">
        What is your gender?
      </h2>
      <p className="text-gray-800 mb-12 text-sm">
        We will use this to personalize your plan
      </p>

      {/* CARDS */}
      <div className="flex gap-4 mt-20">
        <GenderCard type="male" selected={selected} onSelect={handleSelect} />
        <GenderCard type="female" selected={selected} onSelect={handleSelect} />
      </div>
    </main>
  );
}
