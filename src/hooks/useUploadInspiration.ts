import { useMutation } from "@tanstack/react-query";
import { uploadInspiration } from "../api";

export const useUploadInspiration = (data: FormData) => {
  const fetcher = () => uploadInspiration(data);

  return useMutation({
    mutationFn: fetcher,
  });
};
