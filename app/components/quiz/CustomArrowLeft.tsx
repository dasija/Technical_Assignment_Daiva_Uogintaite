"use client";

export default function CustomArrowLeft() {
  return (
    <div className="flex items-center gap-[10px] w-[48px] h-[13.47px] opacity-100">
      <svg
        width="24.77"
        height="13.47"
        viewBox="0 0 25 13.47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.769 6.737H2M2 6.737L8 0.737M2 6.737L8 12.737"
          stroke="#303030"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Jei reikia šalia teksto */}
      {/* <span className="text-[14px] font-medium text-[#303030]">Back</span> */}
    </div>
  );
}
