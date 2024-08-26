type Poem = {
  id: string;
  title: string;
  content: string;
  themes: string[];
  interactions: string[];
  isRecorded: boolean;
  status: 'PENDING';
  createdAt: Date;
  user: {
    id: string;
    name: string;
  }
}

export const poems: Poem[] = [
  {
    id: "1",
    title: "밤의 속삭임",
    content: "고요한 밤, 바람의 속삭임이 들려온다...",
    themes: ["밤", "속삭임", "고요"],
    interactions: ["좋아요", "댓글"],
    isRecorded: false,
    status: "PENDING",
    createdAt: new Date("2024-01-01T12:00:00Z"),
    user: {
      id: "user1",
      name: "김철수",
    },
  },
  {
    id: "2",
    title: "새벽의 품",
    content: "새벽이 오면, 새로운 하루가 시작된다...",
    themes: ["새벽", "희망", "시작"],
    interactions: ["공유"],
    isRecorded: true,
    status: "PENDING",
    createdAt: new Date("2024-01-02T08:00:00Z"),
    user: {
      id: "user2",
      name: "박영희",
    },
  },
  {
    id: "3",
    title: "영원의 메아리",
    content: "영원의 메아리 속에서, 시간이 멈춘다...",
    themes: ["영원", "시간", "메아리"],
    interactions: ["좋아요", "댓글", "공유"],
    isRecorded: false,
    status: "PENDING",
    createdAt: new Date("2024-01-03T15:00:00Z"),
    user: {
      id: "user3",
      name: "이민호",
    },
  },
  {
    id: "4",
    title: "사라지는 기억",
    content: "기억은 저녁 노을처럼 서서히 사라진다...",
    themes: ["기억", "사라짐", "노을"],
    interactions: ["좋아요"],
    isRecorded: true,
    status: "PENDING",
    createdAt: new Date("2024-01-04T18:30:00Z"),
    user: {
      id: "user4",
      name: "최지현",
    },
  },
  {
    id: "5",
    title: "시간의 물결",
    content: "시간의 물결이 인생의 해안에 부딪친다...",
    themes: ["시간", "물결", "인생"],
    interactions: ["댓글", "공유"],
    isRecorded: false,
    status: "PENDING",
    createdAt: new Date("2024-01-05T10:15:00Z"),
    user: {
      id: "user5",
      name: "강하늘",
    },
  },
  {
    id: "6",
    title: "고요한 성찰",
    content: "영혼의 거울 속에 고요한 성찰이 남는다...",
    themes: ["성찰", "영혼", "고요"],
    interactions: ["좋아요", "공유"],
    isRecorded: true,
    status: "PENDING",
    createdAt: new Date("2024-01-06T14:45:00Z"),
    user: {
      id: "user6",
      name: "윤아라",
    },
  },
  {
    id: "7",
    title: "보이지 않는 여정",
    content: "보이지 않는 마음의 여정, 깊고도 깊다...",
    themes: ["여정", "마음", "보이지 않음"],
    interactions: ["댓글"],
    isRecorded: false,
    status: "PENDING",
    createdAt: new Date("2024-01-07T09:00:00Z"),
    user: {
      id: "user7",
      name: "김다솜",
    },
  },
  {
    id: "8",
    title: "황혼의 꿈",
    content: "황혼 속에서 꿈은 빛의 일렁임을 짠다...",
    themes: ["꿈", "황혼", "빛"],
    interactions: ["좋아요", "댓글"],
    isRecorded: true,
    status: "PENDING",
    createdAt: new Date("2024-01-08T19:30:00Z"),
    user: {
      id: "user8",
      name: "서진수",
    },
  },
  {
    id: "9",
    title: "그림자와 빛",
    content: "그림자와 빛의 춤 속에서 진실이 드러난다...",
    themes: ["그림자", "빛", "진실"],
    interactions: ["좋아요", "댓글", "공유"],
    isRecorded: false,
    status: "PENDING",
    createdAt: new Date("2024-01-09T11:00:00Z"),
    user: {
      id: "user9",
      name: "박정민",
    },
  },
  {
    id: "10",
    title: "마지막 작별",
    content: "마지막 속삭임과 함께 작별의 순간이 온다...",
    themes: ["작별", "이별", "끝"],
    interactions: ["댓글", "공유"],
    isRecorded: true,
    status: "PENDING",
    createdAt: new Date("2024-01-10T17:00:00Z"),
    user: {
      id: "user10",
      name: "정혜린",
    },
  },
];
