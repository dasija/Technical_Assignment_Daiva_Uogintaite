"use client";
import Logo from "../Logo";

export default function CheckoutNavbar({ time }: { time: string }) {
  return (
    <div className="w-full bg-[#FFC300] py-4 px-6 flex items-center justify-between">
      <div className="scale-70 -ml-6">
        <Logo />
      </div>

      <div className="text-xl font-semibold">
        Reserved price for: <span className="text-[#7B61FF]">{time}</span>
      </div>
    </div>
  );
}
