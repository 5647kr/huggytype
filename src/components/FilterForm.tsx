import { X } from "lucide-react";
import { useQueryHook } from "../hook/useQueryHook";
import { useFilterStore } from "../store/filterStore";

export default function FilterForm({
  handleApplyFilter,
  handleActiveFilter,
}: {
  handleApplyFilter: () => void;
  handleActiveFilter: () => void;
}) {
  const filterState = useFilterStore((state) => state.filterState);
  const setFilterState = useFilterStore((state) => state.setFilterState);
  const resetFilterState = useFilterStore((state) => state.resetFilter);

  const { data: sido } = useQueryHook({
    key: ["sido"],
    path: "sido_v2",
    page: 1,
    pageNum: 100,
  });

  const { data: sigungu } = useQueryHook({
    key: ["sigungu", filterState.sido],
    path: "sigungu_v2",
    page: 1,
    pageNum: 1000,
    sido: filterState.sido,
    enabled: filterState.sido !== "none",
  });

  const { data: petType } = useQueryHook({
    key: ["petType", filterState.type],
    path: "kind_v2",
    page: 1,
    pageNum: 1000,
    type: filterState.type,
    enabled:
      filterState.type === "417000" ||
      filterState.type === "422400" ||
      filterState.type === "429900",
  });

  // 데이터
  const sidoContent = sido?.items.item;
  const sigunguContent = sigungu?.items.item;
  const petTypeContent = petType?.items.item;
  const stateData = [
    { id: "all", name: "전체" },
    { id: "protect", name: "보호중" },
    { id: "notice", name: "공고중" },
  ];
  const typeData = [
    { id: "all", name: "전체" },
    { id: "417000", name: "강아지" },
    { id: "422400", name: "고양이" },
    { id: "429900", name: "기타" },
  ];
  const sexData = [
    { id: "all", name: "전체" },
    { id: "M", name: "수컷" },
    { id: "F", name: "암컷" },
  ];

  return (
    <section className="bg-white shadow-[0_2px_4px_rgba(96,96,96,0.5)] p-5 text-[#CC8E6B] flex flex-col gap-5 rounded-[10px] mt-2.5 relative">
      <div className="flex gap-5 items-center">
        <h2 className="text-lg font-semibold">시도</h2>
        <select
          name="sido"
          id="sido"
          value={filterState.sido}
          onChange={(e) => setFilterState("sido", e.target.value)}
          className="focus:outline-0 text-base"
        >
          <option value="none">전체</option>
          {sidoContent?.map((item: { orgCd: string; orgdownNm: string }) => (
            <option key={item.orgCd} value={item.orgCd}>
              {item.orgdownNm}
            </option>
          ))}
        </select>
      </div>

      {filterState.sido !== "none" && (
        <div className="flex gap-5">
          <h2 className="text-lg font-semibold">시군구</h2>
          <select
            name="sigungu"
            id="sigungu"
            value={filterState.sigungu}
            onChange={(e) => setFilterState("sigungu", e.target.value)}
            className="focus:outline-0 text-base"
          >
            {sigunguContent?.map(
              (item: { orgCd: string; orgdownNm: string }) => (
                <option key={item.orgCd} value={item.orgCd}>
                  {item.orgdownNm}
                </option>
              )
            )}
          </select>
        </div>
      )}

      <div className="flex gap-5 items-center">
        <h2 className="text-lg font-semibold">상태</h2>
        <ul className="flex p-1 flex-1 rounded-[10px] text-base items-center bg-[#eee]">
          {stateData.map((item) => (
            <li
              key={item.id}
              className={`flex-1 h-full rounded-md ${
                filterState.state === item.id ? "bg-white" : ""
              }`}
            >
              <label
                className={`w-full h-full flex justify-center items-center cursor-pointer py-2.5 ${
                  filterState.state === item.id
                    ? "text-[#CC8E6B]"
                    : "text-[#a0a0a0]"
                }`}
              >
                {item.name}
                <input
                  type="radio"
                  className="a11y-hidden"
                  value={item.id}
                  checked={filterState.state === item.id}
                  onChange={(e) => setFilterState("state", e.target.value)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-5 items-center">
        <h2 className="text-lg font-semibold">축종</h2>
        <ul className="flex p-1 flex-1 rounded-[10px] items-center bg-[#eee]">
          {typeData.map((item) => (
            <li
              key={item.id}
              className={`flex-1 h-full rounded-md ${
                filterState.type === item.id ? "bg-white" : ""
              }`}
            >
              <label
                className={`w-full h-full flex justify-center items-center cursor-pointer py-2.5 ${
                  filterState.type === item.id
                    ? "text-[#CC8E6B]"
                    : "text-[#a0a0a0]"
                }`}
              >
                {item.name}
                <input
                  type="radio"
                  className="a11y-hidden"
                  value={item.id}
                  checked={filterState.type === item.id}
                  onChange={(e) => setFilterState("type", e.target.value)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>

      {filterState.type !== "all" && (
        <div className="flex gap-5">
          <h2 className="text-lg font-semibold">품종</h2>
          <select
            name="petCode"
            id="petCode"
            value={filterState.petCode}
            onChange={(e) => setFilterState("petCode", e.target.value)}
            className="focus:outline-0 text-base"
          >
            {petTypeContent?.map((item: { kindCd: string; kindNm: string }) => (
              <option key={item.kindCd} value={item.kindCd}>
                {item.kindNm}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex gap-5 items-center">
        <h2 className="text-lg font-semibold">성별</h2>
        <ul className="flex p-1 flex-1 rounded-[10px] items-center bg-[#eee]">
          {sexData.map((item) => (
            <li
              key={item.id}
              className={`flex-1 h-full rounded-md ${
                filterState.sex === item.id ? "bg-white" : ""
              }`}
            >
              <label
                className={`w-full h-full flex justify-center items-center cursor-pointer py-2.5 ${
                  filterState.sex === item.id
                    ? "text-[#CC8E6B]"
                    : "text-[#a0a0a0]"
                }`}
              >
                {item.name}
                <input
                  type="radio"
                  className="a11y-hidden"
                  value={item.id}
                  checked={filterState.sex === item.id}
                  onChange={(e) => setFilterState("sex", e.target.value)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-5 flex-row-reverse mt-5">
        <button
          onClick={handleApplyFilter}
          className="cursor-pointer w-full py-2.5 rounded-[10px] border border-[#E3C9A6] text-base"
        >
          찾기
        </button>
        <button
          onClick={resetFilterState}
          className="cursor-pointer w-full py-2.5 rounded-[10px] border border-[#E3C9A6] text-base"
        >
          설정 초기화
        </button>
      </div>

      <button
        className="absolute top-5 right-5 cursor-pointer"
        onClick={handleActiveFilter}
      >
        <X />
      </button>
    </section>
  );
}
