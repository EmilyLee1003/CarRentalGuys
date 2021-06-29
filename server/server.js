const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Minkyoung!1017",
  database: "userAuth",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

const router = require("./router");
const PORT = process.env.PORT || 5000;

app.use(router);

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
    console.log(socket.id);
  });
});

http.listen(PORT, () => {
  console.log("server has started on port");
});
