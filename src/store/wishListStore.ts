import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface WishStore {
  wishState: string[];
  setWishState: (value: string) => void;
}

export const useWishListStore = create<WishStore>()(
  persist(
    (set) => ({
      wishState: [],

      setWishState: (value) => {
        set((state) => {
          const isWished = state.wishState.includes(value);

          return {
            wishState: isWished
              ? state.wishState.filter((id) => id !== value)
              : [...state.wishState, value],
          };
        });
      },
    }),
    {
      name: "wishList-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
