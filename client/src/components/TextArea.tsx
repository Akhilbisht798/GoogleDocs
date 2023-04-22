import { useEffect, useState } from "react";
import MySocket from "./Socket";

interface TextAreaProps {
  room: String | null;
}

const TextArea: React.FC<TextAreaProps> = ({ room }) => {
  const [content, setContent] = useState<String>("");

  const handler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const str = event.target.value;
    setContent(str);
    MySocket.instance.onContentChangeFromClient({ room, msg: str });
  };

  useEffect(() => {
    const handleChange = (a: String) => {
      setContent(a);
    };
    MySocket.instance.onContentChangeFromServer(handleChange);
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
