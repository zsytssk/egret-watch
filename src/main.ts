import * as express from "express";
import socket from "socket.io";

const app = express.default();
const server = socket.listen(8889);
server.on("connection", () => {
  console.log("a user connected");
});
app.use(express.static("src/static"));
app.listen(8888);
