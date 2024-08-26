import { CheckCircleOutlined } from "@ant-design/icons";
import { Button, Flex, Input, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";

// const PreviewImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 50%;
// `;

const Title = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  margin-bottom: 24px;
`;

const AchievementScreen = () => {
  // const [loading, setLoading] = useState(false);
  // const [imageUrl, setImageUrl] = useState("");
  // const [file, setFile] = useState<File | null>(null);

  // const getBase64 = useCallback((img: any, callback: any) => {
  //   const reader = new FileReader();
  //   reader.addEventListener("load", () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // }, []);

  // const beforeUpload = useCallback((file) => {
  //   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  //   if (!isJpgOrPng) {
  //     alert("You can only upload JPG/PNG file!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     alert("Image must smaller than 2MB!");
  //   }
  //   return isJpgOrPng && isLt2M;
  // }, []);

  // const onChange = (info: UploadChangeParam<UploadFile>) => {
  //   if (info.file.status === "uploading") {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === "done") {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //     if (info.file.originFileObj) {
  //       setFile(info.file.originFileObj);
  //     }
  //   }
  // };

  return (
    <Flex vertical gap={"large"}>
      <Title>
        <CheckCircleOutlined />
        업적
      </Title>
      <Flex vertical gap="large" wrap align="center">
        <Upload
          style={{ overflow: "hidden" }}
          name="avatar"
          listType="picture-circle"
          className="avatar-uploader"
          showUploadList={false}
          customRequest={({ onSuccess }) => {
            if (onSuccess) {
              onSuccess("ok");
            }
          }}
          // beforeUpload={beforeUpload}
          // onChange={onChange}
        >
          {/* {imageUrl ? (
            <PreviewImage src={imageUrl} alt="avatar" />
          ) : (
            <UploadButton loading={loading} />
          )} */}
        </Upload>
        <Flex style={{ width: "100%" }} vertical align="center">
          {/* <h4>업적명</h4> */}
          <Input
            style={{ maxWidth: 300 }}
            showCount
            maxLength={10}
            size="large"
            placeholder="업적명"
          />
        </Flex>

        <Flex style={{ width: "100%" }} vertical align="center">
          {/* <h4>획득 조건</h4> */}
          <TextArea
            style={{ maxWidth: 300 }}
            showCount
            maxLength={100}
            size="large"
            placeholder="획득 조건"
          />
        </Flex>
        <Button type="primary">등록</Button>
      </Flex>
    </Flex>
  );
};

export default AchievementScreen;
