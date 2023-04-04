import useSWR from "swr";
import { client } from "lib/client";

interface statuses {
  NONE: "NONE";
  PENDING: "PENDING";
  SUCCESS: "SUCCESS";
  FAILED: "FAILED";
}

export default function useFetcher(pageIndex: number) {
  const query = `?page=${pageIndex}`;
  const fetcher = () => client(query);
  const cacheKey = `page${pageIndex}`;
  const { data, error: isError, isLoading } = useSWR(cacheKey, fetcher);

  return {
    data,
    isLoading,
    isError,
  };
}
