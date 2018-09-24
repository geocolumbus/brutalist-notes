const express = require("express"),
  path = require("path"),
  app = express(),
  port = 3000

console.log(path.join(__dirname, "../"));

app.use("/", express.static(path.join(__dirname, "../")))

app.get('/', function (req, res) {
  res.sendFile('/index.html')
})

app.listen(port)