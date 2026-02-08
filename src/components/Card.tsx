interface CardProps extends CardDatas {
  imgLoadedCount: () => void
}

export default function Card(props: CardProps) {
  return (
    <div className="hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-sm transition hover:transition-shadow-300">
      <img
        onLoad={props.imgLoadedCount}
        className="rounded-sm aspect-square object-cover"
        src={props.IMAGE_COURS}
        alt={props.PBLANC_IDNTFY_NO}
      />
      <h2 className="font-semibold mt-2.5 align-top text-base pl-2.5">
        {props.PBLANC_IDNTFY_NO}
      </h2>
      <div className="flex gap-2.5 text-[#aaa] pb-2.5 text-sm pl-2.5">
        <p>{props.AGE_INFO}</p>
        <p>{props.BDWGH_INFO}</p>
        <p>{props.SEX_NM === "F" ? "암컷" : "수컷"}</p>
      </div>
    </div>
  );
}
