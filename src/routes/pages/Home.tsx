import { useInView } from "react-intersection-observer";
import ContentItem from "../../components/ContentItem";
import { useInfiniteQueryHook } from "../../hook/useQueryHook";
import Loading from "../../components/Loading";
import { useEffect } from "react";

export default function Home() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading } =
    useInfiniteQueryHook({
      key: ["contentData"],
    });

  const content = data?.pages.flatMap((page) => page.items.item) || [];

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  // 초기 진입 로딩 화면
  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-91px)] flex justify-center items-center">
        <strong>데이터 불러오는 중...</strong>
      </div>
    );
  }

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
        {content &&
          content.length > 0 &&
          content.map((item) => (
            <li key={item.noticeNo}>
              <ContentItem {...item} />
            </li>
          ))}
      </ul>

      <div ref={ref} className="flex justify-center py-5">
        <Loading />
      </div>
    </>
  );
}
