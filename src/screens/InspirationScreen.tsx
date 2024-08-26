import { Button, Divider, Flex, Input, Radio, Table, Upload } from "antd";
import { Suspense, useEffect, useMemo, useState } from "react";
import { BookOutlined, UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import styled from "styled-components";
import useWordInspirations from "../hooks/useWordInspirations";
import useTitleInspirations from "../hooks/useTitleInspirations";
import useAudioInspirations from "../hooks/useAudioInspirations";
import useVideoInspirations from "../hooks/useVideoInspirations";
import { InspirationType } from "../types";
import { uploadInspiration } from "../api";

const Title = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  margin-bottom: 24px;
`;

const InspirationListBlock = styled.div``;

const InspirationScreen = () => {
  const [selectedType, setSelectedType] = useState<InspirationType>("WORD");
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState("");

  const { data: words, refetch: wordsRefresh } = useWordInspirations();
  const { data: titles, refetch: titlesRefresh } = useTitleInspirations();
  const { data: audios, refetch: audiosRefresh } = useAudioInspirations();
  const { data: videos, refetch: videoRefresh } = useVideoInspirations();

  useEffect(() => {
    console.log(file);
  }, [file]);

  const clear = () => {
    setContent('');
    setFile(null);
  }

  useEffect(() => {
    clear();
  }, [selectedType]);

  const inspirationTypes = useMemo<
    {
      label: string;
      value: InspirationType;
    }[]
  >(() => {
    return [
      { label: "단어", value: "WORD" },
      { label: "제목", value: "TITLE" },
      { label: "소리", value: "AUDIO" },
      { label: "영상", value: "VIDEO" },
    ];
  }, []);

  const baseColumn = useMemo(
    () => [
      {
        title: "글감 종류",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "내용",
        dataIndex: "content",
        key: "content",
      },
    ],
    []
  );

  const onFileChange = (info: UploadChangeParam<UploadFile>) => {
    console.log(info);
    if (info.file.originFileObj) {
      setFile(info.file.originFileObj);
    }
  };

  const onRegist = async () => {
    const formData = new FormData();

    formData.append("type", selectedType);
    if (file) {
      formData.append("file", file);
    } else {
      formData.append("text", content);
    }

    try {
      await uploadInspiration(formData);
      refresh();
      clear();
    } catch (e) {
      alert('업로드 실패');
      throw e;
    }
  };

  const refresh = () => 
    selectedType === "WORD"
      ? wordsRefresh()
      : selectedType === "TITLE"
      ? titlesRefresh()
      : selectedType === "AUDIO"
      ? audiosRefresh()
      : videoRefresh();

  return (
    <div>
      <Title>
        <BookOutlined />
        글감
      </Title>
      <Flex vertical gap="large">
        <Radio.Group defaultValue="WORD" buttonStyle="solid">
          {inspirationTypes.map((inspiration) => (
            <Radio.Button
              key={inspiration.value}
              value={inspiration.value}
              onClick={() => setSelectedType(inspiration.value)}
            >
              {inspiration.label}
            </Radio.Button>
          ))}
        </Radio.Group>
        {selectedType === "WORD" ? (
          <Input
            style={{ maxWidth: 300 }}
            showCount
            maxLength={10}
            size="large"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : selectedType === "TITLE" ? (
          <Input
            style={{ maxWidth: 500 }}
            showCount
            maxLength={30}
            size="large"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : selectedType === "AUDIO" ? (
          <Flex vertical gap="middle">
            <Upload
              accept="audio/*"
              multiple={false}
              onChange={onFileChange}
              onRemove={() => setFile(null)}
              customRequest={({ onSuccess }) => {
                if (onSuccess) onSuccess("ok");
              }}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Flex>
        ) : (
          <Flex vertical gap="middle">
            <Upload
              action={(file) => {
                setFile(file);
                return '';
              }}
              accept="video/*"
              multiple={false}
              onChange={onFileChange}
              customRequest={({ onSuccess }) => {
                if (onSuccess) onSuccess("ok");
              }}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Flex>
        )}
        <Button style={{ maxWidth: 60 }} type="primary" onClick={onRegist}>
          등록
        </Button>
        <Divider />
        <Suspense fallback={<div>loding</div>}>
          <InspirationListBlock>
            {selectedType === "WORD" ? (
              <Table
                columns={[...baseColumn]}
                dataSource={words.map((word) => ({
                  ...word,
                  content: word.word,
                }))}
              />
            ) : selectedType === "TITLE" ? (
              <Table
                columns={[...baseColumn]}
                dataSource={titles.map((title) => ({
                  ...title,
                  content: title.title,
                }))}
              />
            ) : selectedType === "AUDIO" ? (
              <Table
                columns={[
                  ...baseColumn,
                  {
                    title: "URL",
                    dataIndex: "url",
                    key: "url",
                  },
                ]}
                dataSource={audios.map((audio) => ({
                  ...audio,
                  content: audio.filename,
                  url: audio.audioUrl,
                }))}
              />
            ) : (
              <Table
                columns={[
                  ...baseColumn,
                  {
                    title: "URL",
                    dataIndex: "url",
                    key: "url",
                  },
                ]}
                dataSource={videos.map((video) => ({
                  ...video,
                  content: video.filename,
                  url: video.videoUrl,
                }))}
              />
            )}
          </InspirationListBlock>
        </Suspense>
      </Flex>
    </div>
  );
};

export default InspirationScreen;
