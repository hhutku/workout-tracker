const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const route1 = require("./routes/api");
const route2 = require("./routes/html");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(route1);
app.use(route2);


 mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  
  }
);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


