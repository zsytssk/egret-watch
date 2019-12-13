import * as express from "express";
import socket from "socket.io";
import { compile } from "./compile";

function main() {
  const app = express.default();
  const server = socket.listen(8889);

  app.use(express.static("src/static"));
  app.listen(8888);

  server.on("connection", () => {
    console.log("client is connect connected");
  });
  compile().subscribe(type => {
    server.emit("data", type);
  });
}

main();
