export default function CardSkeleton() {
  return (
    <div className="rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="w-full aspect-square bg-[#eee]"></div>
      <div className="px-2.5 pb-5">
        <div className="w-full mt-5 bg-[#eee] rounded-sm h-5"></div>
        <div className="w-full mt-2.5 bg-[#eee] rounded-sm h-5"></div>
      </div>
    </div>
  );
}
