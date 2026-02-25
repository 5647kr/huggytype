import { Cake, VenusAndMars, WeightTilde } from "lucide-react";

export default function ContentItem(props: ContentData) {
  return (
    <div className="rounded-[10px] overflow-hidden border border-[#E3C9A6]">
      <img
        src={props.popfile1}
        alt={props.kindNm}
        className="w-full aspect-square vertical-top object-cover"
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
            <VenusAndMars className="w-3.5 h-3.5 aspect-square" />
            <p>{props.sexCd === "M" ? "수컷" : "암컷"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
