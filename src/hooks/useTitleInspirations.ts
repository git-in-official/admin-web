import { useSuspenseQuery } from "@tanstack/react-query";
import { getTitleInspirations } from "../api";

const QUERY_KEY = "titles";

const useTitleInspirations = () => {
  const fetcher = () => getTitleInspirations();

  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetcher,
  });
};

export default useTitleInspirations;
