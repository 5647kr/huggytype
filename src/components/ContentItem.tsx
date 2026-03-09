import {
  Cake,
  CircleQuestionMark,
  Heart,
  Image,
  Mars,
  Venus,
  WeightTilde,
} from "lucide-react";
import { useWishListStore } from "../store/wishListStore";
import { useState } from "react";

export default function ContentItem(props: ContentData) {
  const [imgLoad, setImgLoad] = useState(false);

  const wishState = useWishListStore((state) => state.wishState);

  const setWishState = useWishListStore((state) => state.setWishState);

  const handleWishClick = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    setWishState(id);
  };

  const isWished = wishState.includes(props.desertionNo);

  return (
    <div className="rounded-[10px] overflow-hidden border border-[#E3C9A6] relative">
      <button
        className="absolute top-2.5 left-2.5 cursor-pointer z-20"
        onClick={(e) => handleWishClick(props.desertionNo, e)}
      >
        <Heart
          fill={`${isWished ? "#CC8E6B" : "white"}`}
          stroke={`${isWished ? "none" : "#CC8E6B"}`}
        />
      </button>

      {!imgLoad && (
        <div className="w-full aspect-[1/0.8] flex justify-center items-center bg-[#eee]">
          <Image className="text-[#CC8E6B]" size={20} />
        </div>
      )}

      <img
        src={props.popfile1}
        alt={props.kindNm}
        onLoad={() => setImgLoad(true)}
        className={`w-full aspect-[1/0.8] vertical-top object-cover ${
          imgLoad ? "block" : "hidden"
        }`}
      />

      <div className="p-5">
        <h2 className="text-lg text-[#CC8E6B]">{props.noticeNo}</h2>

        <ul className="flex flex-col gap-2.5 mt-5">
          <li className="text-[#D9C5A0] flex gap-2.5 text-sm items-center">
            <Cake className="w-3.5 h-3.5 aspect-square" />
            <p>{props.age}</p>
          </li>
          <li className="text-[#D9C5A0] flex gap-2.5 text-sm items-center">
            <WeightTilde className="w-3.5 h-3.5 aspect-square" />
            <p>{props.weight}</p>
          </li>
          <li className="text-[#D9C5A0] flex gap-2.5 text-sm items-center">
            {props.sexCd === "M" ? (
              <Mars className="w-3.5 h-3.5 aspect-square" />
            ) : props.sexCd === "F" ? (
              <Venus className="w-3.5 h-3.5 aspect-square" />
            ) : (
              <CircleQuestionMark className="w-3.5 h-3.5 aspect-square" />
            )}
            <p>
              {props.sexCd === "M"
                ? "수컷"
                : props.sexCd === "F"
                ? "암컷"
                : "알 수 없음"}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
