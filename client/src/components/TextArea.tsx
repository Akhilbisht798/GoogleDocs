import { useEffect, useState } from "react";
import MySocket from "./Socket";

const TextArea = () => {
  const [content, setContent] = useState("");

  const handler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const str = event.target.value;
    setContent(str);
    MySocket.instance.onContentChange(str);
  };

  useEffect(() => {
    MySocket.instance.onContentChangeServer();
  }, []);

  return (
    <>
      <textarea
        defaultValue="Hello World"
        onChange={(e) => {
          handler(e);
        }}
      ></textarea>
    </>
  );
};

export default TextArea;
