import { useSuspenseQuery } from "@tanstack/react-query";
import { getAudioInspirations } from "../api";

const QUERY_KEY = "audios";

const useAudioInspirations = () => {
  const fetcher = () => getAudioInspirations();

  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetcher,
  });
};

export default useAudioInspirations;
