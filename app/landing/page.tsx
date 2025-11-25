"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GenderCard from "../components/GenderCard";
import LogoSVG from "../components/LogoSVG";

export default function LandingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (gender: string) => {
    setSelected(gender);
    localStorage.setItem("selectedGender", gender);
    setTimeout(() => router.push("/quiz"), 800);
  };

  return (
    <main
      className="flex flex-col items-center justify-start bg-[#F9F6F3] 
                 text-gray-800 font-['Nunito'] w-[375px] h-[640px] 
                 mx-auto px-5 pt-6 pb-5">
      {/* LOGO */}
      <div className="flex items-center justify-center pt-6">
        <LogoSVG />
      </div>

      {/* TITLE */}
      <div className="flex flex-col items-center justify-center mt-6 text-center space-y-2">
        <h2 className="font-['Figtree'] font-semibold text-[24px] leading-[28px] text-[#1E1E1E] text-center">
          What is your gender?
        </h2>
        <p className="font-[var(--font-figtree)] font-normal text-[14px] leading-[18px] text-center text-[#1E1E1E]">
          We will use this to personalize your plan
        </p>
      </div>

      {/* GENDER CARDS CONTAINER */}
      <div className="flex gap-[10px] w-[335px] h-[446px] justify-center items-center mt-10">
        <GenderCard type="male" selected={selected} onSelect={handleSelect} />
        <GenderCard type="female" selected={selected} onSelect={handleSelect} />
      </div>
    </main>
  );
}
