export default function Loading() {
  return (
    <>
      <div className="w-30 h-30 rounded-[50%] inline-block border-t-3 border-t-[#CC8E6B] border-r-3 border-r-transparent box-border animate-spin absolute"></div>
      <strong className="text-base lg:text-xl text-[#CC8E6B] font-semibold animate-bounce">
        Loading
      </strong>
    </>
  );
}
