const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.send("server is up");
});

module.exports = router;
