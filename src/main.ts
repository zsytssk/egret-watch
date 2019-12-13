import * as express from "express";
import socket from "socket.io";
import { compile, CompileType } from "./compile";

function main() {
  const app = express.default();
  const server = socket.listen(8889);

  app.use(express.static("src/static"));
  app.listen(8888);

  server.on("connection", socket => {
    console.log("client is connect connected");
    socket.on("data", (index: number) => {
      console.log(`data:>`, index);

      if (index && Number(index) < cur_index) {
        socket.emit("data", { msg: "end" as CompileType, index: cur_index });
      }
    });
    socket.emit("onopen");
  });
  let cur_index = 0;
  compile().subscribe(msg => {
    if (msg === "end") {
      cur_index++;
    }
    server.emit("data", { msg, index: cur_index });
  });
}

main();
