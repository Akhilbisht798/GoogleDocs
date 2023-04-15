import { useEffect, useState } from "react";
import MySocket from "./components/Socket";
import TextArea from "./components/TextArea";

function App() {
  useEffect(() => {
    MySocket.instance.onConnect();
    MySocket.instance.onDisconnect();
  }, []);

  return (
    <>
      <TextArea />
    </>
  );
}

export default App;
