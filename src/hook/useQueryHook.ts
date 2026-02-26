import {
  useInfiniteQuery,
  useQuery,
  type QueryKey,
} from "@tanstack/react-query";
import { fetchDatas, filterDatas } from "../api/fetchDatas";
import { useFilterStore } from "../store/filterStore";

function useInfiniteQueryHook() {
  const filterState = useFilterStore((state) => state.filterState);

  console.log(filterState);
  return useInfiniteQuery({
    queryKey: ["contentData"],
    queryFn: ({ pageParam }) =>
      fetchDatas({
        page: pageParam,
        path: "abandonmentPublic_v2",
      }),
    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      const totalCount = lastPage.totalCount;

      return totalCount >= lastPage.numOfRows * lastPage.pageNo
        ? lastPage.pageNo + 1
        : undefined;
    },
  });
}

function useQueryHook<T extends QueryKey>({
  key,
  path,
  sido,
  enabled,
}: {
  key: T;
  path: string;
  sido?: string;
  enabled?: boolean;
}) {
  return useQuery({
    queryKey: key,
    queryFn: () => filterDatas({ path: path, sido: sido }),
    enabled: enabled,
  });
}

// 구조동물 조회
// abandonmentPublic_v2

export { useInfiniteQueryHook, useQueryHook };
