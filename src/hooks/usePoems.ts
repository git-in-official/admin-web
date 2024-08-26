import { useSuspenseQuery } from "@tanstack/react-query";
import { getPoems } from "../api";

export const QUERY_KEY = "poems";

export const usePoems = () => {
  const fetcher = () => getPoems();

  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetcher,
  });
};
