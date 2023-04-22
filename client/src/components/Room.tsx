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
    <div className="container mx-auto py-6">
      <form onSubmit={handleSubmit} className=" m-3 p-2 flex flex-col gap-5">
        <label className=" p-4 gap3">
          Enter Room:
          <input
            onChange={(e) => {
              setRoomLocal(e.target.value);
            }}
            className="w-full border rounded-md py-2 px-3 border-red-500"
            required
          />
        </label>
        <label>
          Enter Username:
          <input
            onChange={(e) => {
              setUser(e.target.value);
            }}
            className="w-full border rounded-md py-2 px-3 border-red-500"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Room;
