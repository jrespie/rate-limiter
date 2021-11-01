const express = require("express");
const indexRoute = require("./routes");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;

app.use(
  rateLimit({
    windowMs: 60000, 
    max: 5,
    message: "You exceeded five requests in one minute limit!",
    headers: true,
  })
);

app.use("/posts", indexRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});