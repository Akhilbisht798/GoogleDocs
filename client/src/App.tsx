import { useEffect } from "react";
import TextArea from "./components/TextArea"
import io from 'socket.io-client';
const socket = io("http://localhost:3000/")

function App() {

  socket.on("connection", () => {
    console.log("Connected: " + socket.id)
  })
 
  return (
    <>
      <div className=" text-3xl">
        <TextArea/>
      </div>
    </>
 )
}

export default App
