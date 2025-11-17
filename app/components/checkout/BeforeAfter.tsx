import Image from "next/image";
import Arrows from "./Arrows";

export default function BeforeAfter({ gender }: { gender: string }) {
  return (
    <div className="relative flex justify-center items-center w-full max-w-md mx-auto mb-8">
      <div className="flex w-full h-[300px]">
        {/* Before */}
        <div className="relative w-1/2 h-full">
          <Image
            src={
              gender === "female"
                ? "/images/female-before.jpg"
                : "/images/male-before.jpg"
            }
            alt="Before"
            fill
            className="object-cover rounded-l-md grayscale"
            unoptimized
          />
          <span className="absolute bottom-2 left-2 text-sm bg-white/70 backdrop-blur-sm px-3 py-1 rounded-lg text-gray-700 font-semibold shadow-sm min-w-[70px] text-center">
            Before
          </span>
        </div>

        {/* After */}
        <div className="relative w-1/2 h-full -ml-[1px]">
          <Image
            src={
              gender === "female"
                ? "/images/female-after.jpg"
                : "/images/male-after.jpg"
            }
            alt="After"
            fill
            className="object-cover rounded-r-md"
            unoptimized
          />
          <span className="absolute bottom-2 right-2 text-sm bg-white/100 backdrop-blur-sm px-3 py-1 rounded-lg text-gray-700 font-semibold shadow-sm min-w-[70px] text-center">
            After
          </span>
        </div>
      </div>

      <Arrows />
    </div>
  );
}
