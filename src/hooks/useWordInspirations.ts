import { useSuspenseQuery } from "@tanstack/react-query";
import { getWordInspirations } from "../api";

const QUERY_KEY = "words";

const useWordInspirations = () => {
  const fetcher = () => getWordInspirations();

  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetcher,
  });
};

export default useWordInspirations;
