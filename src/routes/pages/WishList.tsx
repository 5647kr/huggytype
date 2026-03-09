import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useWishListStore } from "../../store/wishListStore";
import { useQueries } from "@tanstack/react-query";
import fetchDatas from "../../api/fetchDatas";
import { Link } from "react-router";
import ContentItem from "../../components/ContentItem";

export default function WishList() {
  const wishState = useWishListStore((state) => state.wishState);

  const [displayCount, setDisplayCount] = useState(10);
  const { ref, inView } = useInView();

  const targetIds = wishState.slice(0, displayCount);

  const wishListData = useQueries({
    queries: targetIds.map((id) => ({
      queryKey: ["contentData", id],
      queryFn: () =>
        fetchDatas({ path: "abandonmentPublic_v2", id, page: 1, pageNum: 1 }),
      staleTime: 1000 * 60 * 30,
    })),
  });

  useEffect(() => {
    if (inView && displayCount < wishState.length) {
      setDisplayCount((prev) => prev + 10);
    }
  }, [inView, wishState.length, displayCount]);

  const likedItems = wishListData
    .map((result) => result.data?.items?.item?.[0])
    .filter(Boolean);

  return (
    <>
      <section className="col-span-full sm:col-[2/8] lg:col-[3/11] text-[#CC8E6B]">
        <h1 className="text-lx mt-10 font-bold">찜목록 ({wishState.length})</h1>

        <div className="my-10">
          {likedItems.length > 0 ? (
            <>
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
                {likedItems.map((item) => (
                  <li key={item.desertionNo}>
                    <Link to={`/detail/${item.desertionNo}`}>
                      <ContentItem {...item} />
                    </Link>
                  </li>
                ))}
              </ul>
              {/* 무한 스크롤 감지 포인트 */}
              {displayCount < wishState.length && (
                <div
                  ref={ref}
                  className="h-10 flex justify-center items-center mt-5"
                >
                  <p>더 불러오는 중...</p>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center">
              <strong className="block mb-5">찜한 동물이 없습니다.</strong>

              <Link to={"/"}>구조 동물 찾으러 가기</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
