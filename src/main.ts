import * as express from "express";
import socket from "socket.io";
import { compile, CompileType } from "./compile";

const project_path = process.argv[2];
function main() {
  const app = express.default();
  const server = socket.listen(8889);

  app.use(express.static("src/static"));
  app.use(express.static(project_path));
  app.listen(8888);

  server.on("connection", socket => {
    socket.on("data", (index: number) => {
      if (index && Number(index) < cur_index) {
        socket.emit("data", { msg: "end" as CompileType, index: cur_index });
      }
    });
    socket.emit("onopen");
  });
  let cur_index = 0;
  compile(project_path).subscribe(msg => {
    if (msg === "end") {
      cur_index++;
    }
    server.emit("data", { msg, index: cur_index });
  });
}

main();
