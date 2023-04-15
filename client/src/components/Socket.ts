import io, { Socket } from "socket.io-client";

class MySocket {
  public socket: Socket;
  public static instance: MySocket = new MySocket();

  private constructor() {
    this.socket = io("http://localhost:3000");
  }

  public onConnect() {
    this.socket.on("connection", (socket) => {
      console.log("User Connected: " + this.socket.id);
    });
  }

  public onDisconnect() {
    this.socket.on("disconnect", (socket) => {
      console.log("User Disconnected: " + this.socket.id);
    });
  }

  // public joinRoom(room: String) {
  //   this.socket.emit("join-room", room);
  // }

  public onContentChange(data: String) {
    this.socket.emit("content-change-client", data);
  }

  public onContentChangeServer(fn: (a: String) => void) {
    this.socket.on("content-change-server", (msg) => {
      fn(msg);
      // console.log(msg);
    });
  }

  // public SendChangesToTextArea() {
  //   this.socket.emit("changes-from-client", () = {
  //
  //   })
  // }
}

export default MySocket;
