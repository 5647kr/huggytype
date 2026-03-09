import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FilterState {
  sido: string;
  sigungu: string;
  state: string;
  type: string;
  petCode: string;
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
        petCode: "",
        sex: "all",
      },

      setFilterState: (key, value) =>
        set((state) => ({
          filterState: {
            ...state.filterState,
            [key]: value,
            ...(key === "sido" ? { sigungu: "" } : {}),
            ...(key === "type" ? { petCode: "" } : {}),
          },
        })),

      resetFilter: () =>
        set({
          filterState: {
            sido: "none",
            sigungu: "",
            state: "all",
            type: "all",
            petCode: "",
            sex: "all",
          },
        }),
    }),
    {
      name: "filter-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
