export type InspirationType = "TITLE" | "WORD" | "AUDIO" | "VIDEO";

interface BaseInspiration {
  id: string;
}

interface WordInspiration extends BaseInspiration {
  type: 'WORD';
  word: string;
}

interface TitleInspiration extends BaseInspiration {
  type: 'TITLE';
  title: string;
}

interface AudioInspiration extends BaseInspiration {
  type: 'AUDIO';
  filename: string;
  audioUrl: string;
}

interface VideoInspiration extends BaseInspiration {
  type: 'VIDEO';
  filename: string;
  videoUrl: string;
}

export type Inspiration =
  | WordInspiration
  | TitleInspiration
  | AudioInspiration
  | VideoInspiration;
