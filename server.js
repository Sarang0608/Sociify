const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//Initializing the app
const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB through Mongoose
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

//The main page
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

//Start the server on PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
