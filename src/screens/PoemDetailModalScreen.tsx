import styled from "styled-components";
import { Inspiration } from "../types";

interface PoemDetailModalScreen {
  content: string;
  inspiration: Inspiration | null;
}

const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const PoemDetailModalScreen = ({
  content,
  inspiration,
}: PoemDetailModalScreen) => {
  return (
    <Container>
      <ContentBlock content={content} />
      {inspiration?.type === "TITLE" ? (
        <InspirationBlock type={inspiration.type} content={inspiration.title} />
      ) : inspiration?.type === "WORD" ? (
        <InspirationBlock type={inspiration.type} content={inspiration.word} />
      ) : inspiration?.type === "AUDIO" ? (
        <InspirationBlock
          type={inspiration.type}
          content={inspiration.filename}
        />
      ) : inspiration?.type === "VIDEO" ? (
        <InspirationBlock
          type={inspiration.type}
          content={inspiration.filename}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

const ContentBlock = ({ content }: { content: string }) => {
  return (
    <div>
      <h3>내용</h3>
      <p>{content}</p>
    </div>
  );
};

const InspirationBlock = ({
  type,
  content,
}: {
  type: 'WORD' | 'TITLE' | 'AUDIO' | 'VIDEO';
  content: string;
}) => {
  return (
    <div>
      <h3>참고한 글감</h3>
      <div>
        {type === "WORD"
          ? "단어 글감"
          : type === "TITLE"
          ? "제목 글감"
          : type === "AUDIO"
          ? "소리 글감"
          : "영상 글감"}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default PoemDetailModalScreen;
