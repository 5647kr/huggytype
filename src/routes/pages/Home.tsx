import { useInView } from "react-intersection-observer";
import ContentItem from "../../components/ContentItem";
import { useInfiniteQueryHook } from "../../hook/useQueryHook";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import FilterForm from "../../components/FilterForm";
import { Link } from "react-router";
import { useFilterStore } from "../../store/filterStore";

export default function Home() {
  const filterState = useFilterStore((state) => state.filterState);
  const [applyFilter, setApplyFilter] = useState(filterState);

  const handleApplyFilter = () => {
    setApplyFilter(filterState);
  };

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading } =
    useInfiniteQueryHook({ applyFilter });

  const content = data?.pages.flatMap((page) => page.items?.item || []) || [];

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  // 초기 진입 로딩 화면
  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-91px)] col-span-full sm:col-[2/8] lg:col-[3/11] flex justify-center items-center">
        <strong>데이터 불러오는 중...</strong>
      </div>
    );
  }

  return (
    <>
      <section className="col-span-full sm:col-[2/8] lg:col-[3/11]">
        <FilterForm handleApplyFilter={handleApplyFilter} />
      </section>

      <section className="col-span-full sm:col-[2/8] lg:col-[3/11]">
        {content && content.length > 0 ? (
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {content.map((item) => (
              <li key={item.desertionNo}>
                <Link to={`detail/${item.desertionNo}`}>
                  <ContentItem {...item} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </section>

      {hasNextPage && (
        <div ref={ref} className="col-span-full flex justify-center py-5">
          <Loading />
        </div>
      )}
    </>
  );
}
