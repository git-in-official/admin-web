type InspirationType = 'WORD' | 'TITLE' | 'AUDIO' | 'VIDEO';

export interface Poem {
  id: string;
  title: string;
  authorName: string;
  themes: string[];
  interactions: string[];
  isRecorded: boolean;
  createdAt: string;
  status: string;
  content: string;
  audioUrl?: string;
  inspiration: WordInspiration | TitleInspiration | AudioInspiration | VideoInspiration;
}

interface WordInspiration {
  id: string;
  type: 'WORD';
  word: string;
}

interface TitleInspiration {
  id: string;
  type: 'TITLE';
  title: string;
}

interface AudioInspiration {
  id: string;
  type: 'AUDIO';
  filename: string;
  audioUrl: string;
}

interface VideoInspiration {
  id: string;
  type: 'VIDEO';
  filename: string
  videoUrl: string;
}

export type PoemsResponse = Poem[];
export type UploadTextInspirationsData = {
  type: InspirationType;
  text: string;
};
export type UploadFileInspirationsData = {
  type: InspirationType;
  file: File;
};
export type WordInspirationsResponse = WordInspiration[];
export type TitleInspirationsResponse = TitleInspiration[];
export type AudioInspirationsResponse = AudioInspiration[];
export type VideoInspirationsResponse = VideoInspiration[];
