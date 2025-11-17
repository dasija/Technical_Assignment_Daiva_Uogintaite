"use client";

export default function CustomArrowLeft() {
  return (
    <svg
      width="48"
      height="14"
      viewBox="0 0 48 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {/* Horizontal line */}
      <line
        x1="1"
        y1="7"
        x2="35"
        y2="7"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      {/* Arrow head */}
      <line
        x1="1"
        y1="7"
        x2="11"
        y2="1"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <line
        x1="1"
        y1="7"
        x2="11"
        y2="13"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
