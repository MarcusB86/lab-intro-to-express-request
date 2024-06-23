const express = require("express");

const app = express();


app.get("/flying/freaky/fish", (request, response) => {
  response.send("Congratulations on starting a new project called flying-freaky-fish!");
});

app.get("/")

const port = 8888;
app.listen(port, () => {
  console.log(`Server running strong on ${port}`);

})
module.exports = app;