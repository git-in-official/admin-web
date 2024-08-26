import { useSuspenseQuery } from "@tanstack/react-query";
import { getVideoInspirations } from "../api";

const QUERY_KEY = "videos";

const useVideoInspirations = () => {
  const fetcher = () => getVideoInspirations();

  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetcher,
  });
};

export default useVideoInspirations;
