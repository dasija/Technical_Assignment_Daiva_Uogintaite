"use client";
import { useEffect, useState } from "react";

export default function Logo() {
  return (
    <div
      className="flex flex-col text-[#3A2E2A] font-bold leading-none"
      style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Viršutinė eilutė */}
      <span className="text-2xl sm:text-3xl">mellow</span>

      {/* Apatinė eilutė su bangos ženklu */}
      <span className="relative text-2xl sm:text-3xl -mt-[2px] ml-[40px]">
        flow
        <svg
          className="absolute left-[-40px] top-[10px] scale-90"
          width="52"
          height="10"
          viewBox="0 0 52 10"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 5 C3 3, 7 7, 10 5 S17 3, 20 5 S27 7, 30 5 S37 3, 40 5 S45 7, 50 5"
            stroke="#7B61FF"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  );
}
