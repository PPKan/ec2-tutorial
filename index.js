const express = require("express");
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  console.log("GET method worked");
  return res.send('Received a GET HTTP method');
});
app.listen(3000, () => console.log("Server running on port 3000"));
