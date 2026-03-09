import { useParams } from "react-router";
import { useQueryHook } from "../../hook/useQueryHook";
import {
  Cake,
  Cat,
  CircleQuestionMark,
  Dog,
  Heart,
  Mars,
  Palette,
  PencilLine,
  Venus,
  VenusAndMars,
  WeightTilde,
} from "lucide-react";
import Loading from "../../components/Loading";
import { useWishListStore } from "../../store/wishListStore";

export default function Detail() {
  const { id } = useParams();
  const wishState = useWishListStore((state) => state.wishState);
  const setWishState = useWishListStore((state) => state.setWishState);

  const { data, isLoading } = useQueryHook({
    key: ["contentData"],
    path: "abandonmentPublic_v2",
    page: 1,
    pageNum: 1,
    id: id,
  });

  const content: ContentData = data?.items.item[0] || [];
  const isWished = wishState.includes(content.desertionNo);

  const handleWishClick = (id: string) => {
    setWishState(id);
  };

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-111px)] col-span-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <section className="bg-[#d9d9d9] text-[#CC8E6B] col-span-full sm:col-[2/8] lg:col-[3/11]">
        <div className="bg-white pt-10">
          <div className="flex flex-col items-end gap-2.5 mb-5">
            <button
              className="cursor-pointer z-20"
              onClick={() => handleWishClick(content.desertionNo)}
            >
              <Heart
                fill={`${isWished ? "#CC8E6B" : "white"}`}
                stroke={`${isWished ? "none" : "#CC8E6B"}`}
              />
            </button>
            <div className="flex gap-2.5">
              <PencilLine />
              <p className="text-right">{content.updTm}</p>
            </div>
          </div>
          <h1 className="font-bold text-xl">구조 동물 정보</h1>
        </div>

        {/* 이미지 및 기본 정보 */}
        <div className="grid grid-cols-2 gap-5 bg-white pt-5 pb-10">
          <img
            src={content.popfile1}
            alt={content.noticeNo}
            className="w-full max-h-100 object-cover aspect-square"
          />
          <div className="w-full">
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-2.5">
                <Cake />
                <p>{content.age}</p>
              </li>
              <li className="flex items-center gap-2.5">
                <WeightTilde />
                <p>{content.weight}</p>
              </li>
              <li className="flex items-center gap-2.5">
                {content.upKindNm === "개" ? (
                  <Dog />
                ) : content.upKindNm === "고양이" ? (
                  <Cat />
                ) : (
                  <CircleQuestionMark />
                )}
                <p>{content.kindNm}</p>
              </li>
              <li className="flex items-center gap-2.5">
                {content.sexCd === "M" ? (
                  <Mars />
                ) : content.sexCd === "F" ? (
                  <Venus />
                ) : (
                  <CircleQuestionMark />
                )}
                <p>
                  {content.sexCd === "M"
                    ? "수컷"
                    : content.sexCd === "F"
                    ? "암컷"
                    : "미상"}
                </p>
              </li>
              <li className="flex items-center gap-2.5">
                <VenusAndMars />
                <p>
                  {content.neuterYn === "Y"
                    ? "중성화 진행함"
                    : content.neuterYn === "N"
                    ? "중성화 안함"
                    : "중성화 확인불가"}
                </p>
              </li>
              <li className="flex items-center gap-2.5">
                <Palette />
                <p>{content.colorCd}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 구조 정보 */}
        <div className="grid grid-cols-2 gap-5 bg-white py-5 border-y border-[#CC8E6B]">
          <ul className="flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5">
              <p>구조번호: {content.desertionNo}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>공고번호: {content.noticeNo}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>
                공고기간: {content.noticeSdt} ~ {content.noticeEdt}
              </p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>접수일: {content.happenDt}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>발견장소: {content.happenPlace}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>상태: {content.processState}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>특징: {content.specialMark}</p>
            </li>
          </ul>
        </div>

        {/* 보호소 정보 */}
        <div className="grid grid-cols-2 gap-5 bg-white py-5">
          <ul className="flex flex-col gap-2.5">
            <li className="flex items-center gap-2.5">
              <p>보호소: {content.careNm}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>보호소 대표자: {content.careOwnerNm}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>보호소 연락처: {content.careTel}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>보호 장소: {content.careAddr}</p>
            </li>
            <li className="flex items-center gap-2.5">
              <p>관할기관: {content.orgNm}</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
