let status = "";

loadSingleScript("http://localhost:8888/socket.io.js", () => {
  const socket = io("http://localhost:8889");
  socket.on("data", msg => {
    if (msg === "compile" && status !== msg) {
      document.title += " compiling...";
    }
    if (msg === "end") {
      location.reload(true);
    }
    status = msg;
  });
});

function loadSingleScript(src, callback) {
  var s = document.createElement("script");
  s.async = false;
  s.src = src;
  s.addEventListener(
    "load",
    function() {
      s.parentNode.removeChild(s);
      s.removeEventListener("load", arguments.callee, false);
      callback();
    },
    false
  );
  document.body.appendChild(s);
}
