const express = require("express");
const compression = require("compression");
const app = express();

app.set("etag", false);
app.use(compression());

app.get("/data", (req, res) => {
  return res.json({
    message: "Hello, Axel Blaze, This is a test message. ".repeat(10000),
  });
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
