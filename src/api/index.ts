import { http } from "./http";
import {
  AudioInspirationsResponse,
  PoemsResponse,
  TitleInspirationsResponse,
  VideoInspirationsResponse,
  WordInspirationsResponse,
} from "./types";

export const getPoems = async () => {
  const response = await http.get<PoemsResponse>("admin/poems/proofreading");
  return response.data;
};

export const uploadInspiration = async (data: FormData) => {
  const response = await http.post<void>("admin/inspirations", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.status;
};

export const getWordInspirations = async () => {
  const response = await http.get<WordInspirationsResponse>(
    "admin/inspirations/words"
  );
  return response.data;
};

export const getTitleInspirations = async () => {
  const response = await http.get<TitleInspirationsResponse>(
    "admin/inspirations/titles"
  );
  return response.data;
};

export const getAudioInspirations = async () => {
  const response = await http.get<AudioInspirationsResponse>(
    "admin/inspirations/audios"
  );
  return response.data;
};

export const getVideoInspirations = async () => {
  const response = await http.get<VideoInspirationsResponse>(
    "admin/inspirations/videos"
  );
  return response.data;
};

export const publishPoem = async (poemId: string) => {
  const response = await http.patch<void>(
    `admin/poems/proofreading/${poemId}/publish`
  );
  return response.status;
};
