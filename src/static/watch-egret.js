const socket_js_url = "http://localhost:8888/socket.io.js";
const socket_io_url = "http://localhost:8889";
async function main() {
  await loadWatchEgretScript(socket_js_url);
  connectServer(() => {
    location.reload(true);
  });
}
main();

function loadWatchEgretScript(src) {
  return new Promise((resolve, reject) => {
    var s = document.createElement("script");
    s.async = false;
    s.src = src;
    s.addEventListener(
      "load",
      () => {
        s.parentNode.removeChild(s);
        s.removeEventListener("load", arguments.callee, false);
        resolve();
      },
      false
    );
    document.body.appendChild(s);
  });
}

function setId(id) {
  localStorage.setItem("watch-egret", id);
}
function getId() {
  return localStorage.getItem("watch-egret");
}

let status = "";
/** 连接服务器 */
function connectServer(on_reload) {
  const socket = io(socket_io_url);
  socket.on("onopen", () => {
    socket.emit("data", getId());
  });
  socket.on("data", ({ msg, index }) => {
    if (msg === "compile" && status !== msg) {
      document.title += " compiling...";
    }
    if (msg === "end") {
      setId(index);
      on_reload && on_reload();
    }
    status = msg;
  });
}
