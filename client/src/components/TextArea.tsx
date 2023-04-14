import { useEffect } from "react";
import MySocket from "./Socket";

const TextArea = () => {
  useEffect(() => {
    MySocket.instance.joinRoom("Hello");
  });
  return (
    <>
      <textarea value="Hello World"></textarea>
    </>
  );
};

export default TextArea;
