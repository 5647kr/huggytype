import { useInfiniteQuery } from "@tanstack/react-query";
import fetchDatas from "../api/fetchDatas";

function useInfiniteQueryHook({ key }: { key: string[] }) {
  return useInfiniteQuery({
    queryKey: key,
    queryFn: ({ pageParam }) => fetchDatas({ page: pageParam }),
    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      const totalCount = lastPage.totalCount;
      console.log(lastPage);
      return totalCount >= lastPage.numOfRows * lastPage.pageNo
        ? lastPage.pageNo + 1
        : undefined;
    },
  });
}

// 구조동물 조회
// abandonmentPublic_v2

export { useInfiniteQueryHook };
