export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full max-w-sm bg-gray-200 h-1 rounded-full mb-8">
      <div
        className="bg-[#7B61FF] h-1 rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
