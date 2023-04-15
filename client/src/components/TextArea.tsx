import { useEffect, useState } from "react";
import MySocket from "./Socket";

const TextArea = () => {
  const [content, setContent] = useState<String>("");

  const handler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const str = event.target.value;
    setContent(str);
    MySocket.instance.onContentChange(str);
  };

  useEffect(() => {
    const handleChange = (a: String) => {
      setContent(a);
    };
    MySocket.instance.onContentChangeServer(handleChange);
  }, []);

  return (
    <>
      <textarea
        value={content}
        onChange={(e) => {
          handler(e);
        }}
      />
    </>
  );
};

export default TextArea;
