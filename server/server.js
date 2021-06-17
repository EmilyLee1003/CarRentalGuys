const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const router = require("./router");
const PORT = process.env.PORT || 5000;

app.use(router);

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});
http.listen(PORT, () => {
  console.log("server has started on port");
});
