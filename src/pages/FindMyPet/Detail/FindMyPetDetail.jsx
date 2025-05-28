import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { usePetListStore } from "../../../store/UsePetListStore";
import Header from "../../../components/Header";
import { Wrap } from "../../../components/Common";


export default function FindMyPetDetail() {
  const params = useParams();
  const loc = useLocation();
  const selectedPet = loc.state.selectedPet;
  const { petList, getPetListData } = usePetListStore();
  const [pet, setPet] = useState([]);

  useEffect(() => {
    if (petList.length === 0) {
      getPetListData(selectedPet);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (params.id && petList.length > 0) {
      const found = petList.find((item) => item.ABDM_IDNTFY_NO === params.id);
      setPet(found || null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petList]);

  console.log(pet)


  return (
    <>
      <Header />
      <Wrap>
        
      </Wrap>
    </>
  );
}
