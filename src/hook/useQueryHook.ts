import {
  useInfiniteQuery,
  useQuery,
  type QueryKey,
} from "@tanstack/react-query";
import fetchDatas from "../api/fetchDatas";

function useInfiniteQueryHook({ applyFilter }: { applyFilter: FilterState }) {
  return useInfiniteQuery({
    queryKey: ["contentData", applyFilter],
    queryFn: ({ pageParam }) =>
      fetchDatas({
        page: pageParam,
        path: "abandonmentPublic_v2",
        pageNum: 20,
        applyFilter: applyFilter,
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
  page,
  pageNum,
  sido,
  id,
  enabled,
}: {
  key: T;
  path: string;
  page: number;
  pageNum: number;
  sido?: string;
  id?: string;
  enabled?: boolean;
}) {
  return useQuery({
    queryKey: key,
    queryFn: () =>
      fetchDatas({
        path: path,
        page: page,
        pageNum: pageNum,
        sido: sido,
        id: id,
      }),
    enabled: enabled,
  });
}

export { useInfiniteQueryHook, useQueryHook };
