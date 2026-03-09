import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="py-5 px-4 md:px-8 border-b border-b-[#E3C9A6] flex justify-between items-center">
      <img
        src="/favicon.webp"
        alt="로고 이미지"
        className="w-10 vertical-top"
      />

      <div className="flex gap-x-5">
        <NavLink
          className={({ isActive }) =>
            `text-sm ${
              isActive
                ? "text-[#CC8E6B] font-semibold"
                : "text-[#aaa] font-normal"
            }`
          }
          to="/"
        >
          홈
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-sm ${
              isActive
                ? "text-[#CC8E6B] font-semibold"
                : "text-[#aaa] font-normal"
            }`
          }
          to="/recommend"
        >
          추천
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-sm ${
              isActive
                ? "text-[#CC8E6B] font-semibold"
                : "text-[#aaa] font-normal"
            }`
          }
          to="/wishList"
        >
          찜목록
        </NavLink>
      </div>
    </header>
  );
}
