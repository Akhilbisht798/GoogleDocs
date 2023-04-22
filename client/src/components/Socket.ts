import io, { Socket } from "socket.io-client";

interface ContentFromClientToServer {
  room: String | null;
  msg: String | null;
}

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

  public joinRoom(room: String | null) {
    this.socket.emit("join-room", room);
  }

  public onContentChangeFromClient(data: ContentFromClientToServer) {
    this.socket.emit("content-change-client", data);
  }

  public onContentChangeFromServer(fn: (a: String) => void) {
    this.socket.on("content-change-server", (msg) => {
      fn(msg);
    });
  }
}

export default MySocket;
