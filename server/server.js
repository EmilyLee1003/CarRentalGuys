const app = require("express")();
const http = require("http").createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
var cors = require("cors");

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
app.use(cors());

io.on("connection", (socket) => {
  console.log("socket io connected");
  socket.on("new message", ({ name, message }) => {
    console.log("server.js received message", name, message);
    io.emit("message", { name, message });
    console.log(socket.id);
  });
});

http.listen(PORT, () => {
  console.log("server has started on port", PORT);
});

app.post("/userauth", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],

    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "wrong username and password" });
      }
    }
  );
});

app.get("/userauth", (req, res) => {
  connection.query("SELECT * FROM users", (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      res.json({
        data: result,
      });
    }
  });
});
