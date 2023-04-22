import { useEffect, useState } from "react";
import Room from "./components/Room";
import MySocket from "./components/Socket";
import TextArea from "./components/TextArea";

function App() {
  const [room, setRoom] = useState<String | null>(null);
  const [username, setUsername] = useState<String | null>(null);
  useEffect(() => {
    MySocket.instance.onConnect();
    MySocket.instance.onDisconnect();
  }, []);

  return (
    <>
      {username === null ? (
        <Room setUsername={setUsername} setRoom={setRoom} />
      ) : (
        <TextArea room={room} />
      )}
    </>
  );
}

export default App;
