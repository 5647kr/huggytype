import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FilterState {
  sido: string;
  sigungu: string;
  state: string;
  type: string;
  sex: string;
}

interface FilterStore {
  filterState: FilterState;
  setFilterState: (key: keyof FilterState, value: string) => void;
  resetFilter: () => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      filterState: {
        sido: "none",
        sigungu: "",
        state: "all",
        type: "all",
        sex: "all",
      },

      setFilterState: (key, value) =>
        set((state) => ({
          filterState: {
            ...state.filterState,
            [key]: value,
            ...(key === "sido" ? { sigungu: "" } : {}),
          },
        })),

      resetFilter: () =>
        set({
          filterState: {
            sido: "none",
            sigungu: "",
            state: "all",
            type: "all",
            sex: "all",
          },
        }),
    }),
    {
      name: "filter-storage", // sessionStorage에 저장될 키 이름
      storage: createJSONStorage(() => sessionStorage), // 기본값인 localStorage 대신 sessionStorage 설정
    }
  )
);
