import { useState } from "react";
import MySocket from "./Socket";

interface RoomProps {
  setRoom: (str: String | null) => void;
  setUsername: (str: String | null) => void;
}

const Room: React.FC<RoomProps> = ({ setRoom, setUsername }) => {
  const [room, setRoomLocal] = useState<String | null>(null);
  const [user, setUser] = useState<String | null>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setUsername(user);
    setRoom(room);
    MySocket.instance.joinRoom(room);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" m-3 p-2 flex flex-col gap-5">
        <label>
          {" "}
          Enter Room:
          <input
            onChange={(e) => {
              setRoomLocal(e.target.value);
            }}
            required
          />
        </label>
        <label>
          {" "}
          Enter Username:
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Room;
