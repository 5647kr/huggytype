import axios from "axios";
import { create } from "zustand";

export const usePetListStore = create((set) => ({
  petList: [],

  getPetListData: async (types) => {
    const apiUrl = "https://openapi.gg.go.kr/AbdmAnimalProtect";
    const key = "16fb50483b404bae9a496e159ab09890";

    const petListData = [];

    for (let i = 0; i < types.length; i++) {
      const type = encodeURIComponent(types[i]);

      const url = `${apiUrl}?key=${key}&type=json&STATE_NM=보호중&SPECIES_NM=${type}`;

      try {
        const response = await axios.get(url);
        const data = response.data.AbdmAnimalProtect?.[1].row || [];

        petListData.push(...data);
      } catch (error) {
        console.error(error);
      }
    }

    set({ petList: petListData });
  },
}));
