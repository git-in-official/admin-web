import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const UploadButton = ({ loading }: { loading: boolean }) => {
  return (
    <button
      style={{
        border: 0,
        background: "none",
        overflow: "hidden",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
};

export default UploadButton
