const express = require("express");
const logger = require("morgan");

const router = require("./routes/html.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(router);



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


