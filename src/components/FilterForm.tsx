// import { useState } from "react";
import { useEffect } from "react";
import { useQueryHook } from "../hook/useQueryHook";
import { useFilterStore } from "../store/filterStore";

export default function FilterForm() {
  const filterState = useFilterStore((state) => state.filterState);
  const setFilterState = useFilterStore((state) => state.setFilterState);

  const { data: sido } = useQueryHook({
    key: ["sido"],
    path: "sido_v2",
  });

  const { data: sigungu } = useQueryHook({
    key: ["sigungu", filterState.sido],
    path: "sigungu_v2",
    sido: filterState.sido,
    enabled: filterState.sido !== "none",
  });

  // 데이터
  const sidoContent = sido?.items.item;
  const sigunguContent = sigungu?.items.item;
  const stateData = [
    { id: "all", name: "전체" },
    { id: "protect", name: "보호중" },
    { id: "notice", name: "공고중" },
  ];
  const typeData = [
    { id: "all", name: "전체" },
    { id: "417000", name: "강아지" },
    { id: "422400", name: "고양이" },
  ];
  const sexData = [
    { id: "all", name: "전체" },
    { id: "M", name: "수컷" },
    { id: "F", name: "암컷" },
  ];

  useEffect(() => {
    if (sigunguContent && sigunguContent.length > 0) {
      const firstItem = sigunguContent[0].orgCd;

      if (filterState.sigungu !== firstItem) {
        setFilterState("sigungu", firstItem);
      }
    }
  }, [sigunguContent, filterState.sigungu, setFilterState]);

  return (
    <>
      <div className="flex gap-5">
        <h2>시도</h2>
        <select
          name="sido"
          id="sido"
          value={filterState.sido}
          onChange={(e) => setFilterState("sido", e.target.value)}
          className="focus:outline-0"
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
          <h2>시군구</h2>
          <select
            name="sigungu"
            id="sigungu"
            value={filterState.sigungu}
            onChange={(e) => setFilterState("sigungu", e.target.value)}
            className="focus:outline-0"
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

      <div className="flex gap-5">
        <h2>상태</h2>
        <ul className="flex p-1 w-full rounded-[10px] items-center bg-[#eee]">
          {stateData.map((item) => (
            <li
              key={item.id}
              className={`flex-1 h-full rounded-md ${
                filterState.state === item.id ? "bg-white" : ""
              }`}
            >
              <label
                className={`w-full h-full flex justify-center items-center cursor-pointer ${
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

      <div className="flex gap-5">
        <h2>축종</h2>
        <ul className="flex p-1 w-full rounded-[10px] items-center bg-[#eee]">
          {typeData.map((item) => (
            <li
              key={item.id}
              className={`flex-1 h-full rounded-md ${
                filterState.type === item.id ? "bg-white" : ""
              }`}
            >
              <label
                className={`w-full h-full flex justify-center items-center cursor-pointer ${
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

      <div className="flex gap-5">
        <h2>성별</h2>
        <ul className="flex p-1 w-full rounded-[10px] items-center bg-[#eee]">
          {sexData.map((item) => (
            <li
              key={item.id}
              className={`flex-1 h-full rounded-md ${
                filterState.sex === item.id ? "bg-white" : ""
              }`}
            >
              <label
                className={`w-full h-full flex justify-center items-center cursor-pointer ${
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
    </>
  );
}
