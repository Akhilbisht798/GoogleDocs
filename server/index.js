const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
  },
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

io.on("connection", (socket) => {
  console.log("Connection: " + socket.id);

  socket.on("disconnect", () => {
    console.log(socket.id + " Disconnected");
  });

  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(socket.id + " Joinned- " + room);
  });

  socket.on("content-change-client", (data) => {
    socket.emit("content-change-server", data);
    console.log(data);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
