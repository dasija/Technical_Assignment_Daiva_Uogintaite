export default function Arrows() {
  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none translate-x-[40px]">
      <div className="flex">
        {[...Array(3)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-25 h-25 -ml-[80px] drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
            <polyline points="8 4 16 12 8 20" />
          </svg>
        ))}
      </div>
    </div>
  );
}
