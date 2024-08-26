import { Button, Flex, Modal, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { usePoems } from "../hooks/usePoems";
import { Inspiration } from "../types";
import PoemDetailModalScreen from "./PoemDetailModalScreen";
import { publishPoem } from "../api";

type DataType = {
  id: string;
  title: string;
  authorName: string;
  content: string;
  themes: string[];
  interactions: string[];
  isRecorded: string;
  status: string;
  createdAt: string;
  inspiration: Inspiration;
};

const Title = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  margin-bottom: 24px;
`;

const columns: TableProps<DataType>["columns"] = [
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "작성자",
    dataIndex: "authorName",
    key: "authorName",
  },
  {
    title: "테마",
    dataIndex: "themes",
    key: "themes",
    render: (_, { themes }) => (
      <>
        {themes.map((theme) => {
          const color =
            theme.length === 1
              ? "geekblue"
              : theme.length === 2
              ? "green"
              : "volcano";

          return (
            <Tag color={color} key={theme}>
              {theme.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "상호작용",
    dataIndex: "interactions",
    key: "interactions",
    render: (_, { interactions }) => (
      <>
        {interactions.map((interaction) => {
          const color =
            interaction.length === 1
              ? "geekblue"
              : interaction.length === 2
              ? "green"
              : "volcano";

          return (
            <Tag color={color} key={interaction}>
              {interaction}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "낭독 여부",
    dataIndex: "isRecorded",
    key: "isRecorded",
  },
  {
    title: "작성일",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "상태",
    dataIndex: "status",
    key: "status",
  },
];

const PoemScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [poemId, setPoemId] = useState('');
  const [content, setContent] = useState("");
  const [inspiration, setInspiration] = useState<Inspiration | null>(null);
  const {data: poems, refetch} = usePoems();

  useEffect(() => {
    console.log(poems);
  }, [poems])

  const clearModalState = () => {
    setIsOpenModal(false);
    setPoemId('');
    setContent('');
    setInspiration(null);
  }
  
  const onPublish = async () => {
    try {
      await publishPoem(poemId);
      clearModalState();
      refetch();
    } catch (e) {
      alert('출판 실패');
      throw e;
    }
  }

  const onClose = () => setIsOpenModal(false);

  return (
    <>
      <Flex vertical gap={"middle"}>
        <Title>
          <EditOutlined />시
        </Title>
        <Table
          onRow={(record) => ({
            onClick: () => {
              setContent(record.content);
              setInspiration(record.inspiration);
              setPoemId(record.id);
              setIsOpenModal(true);
            },
          })}
          columns={columns}
          dataSource={poems.map((poem) => ({
            ...poem,
            isRecorded: poem.isRecorded ? "O" : "X",
          }))}
        />
        ;
      </Flex>
      <Modal
        open={isOpenModal}
        onCancel={onClose}
        footer={[
          <Button type="primary" key="back" onClick={onPublish}>
            출판
          </Button>,
        ]}
      >
        <PoemDetailModalScreen content={content} inspiration={inspiration} />
      </Modal>
    </>
  );
};

export default PoemScreen;
