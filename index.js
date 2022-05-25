const express = require("express");
const app = express();

// app.use(express.json())

app.get("/", (req, res) => {
  return res.send("Hello My Friend.")
});

const apiRouter = require("./router/api");
app.use("/api", apiRouter);


app.listen(3000, () => console.log("Server running on port 3000"));

