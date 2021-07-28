//import packages
const express = require("express");
const morgan = require('morgan'); //HTTP request logger middleware for node.js
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const path = require("path"); // to make path manipulation easier

//Declaring routes
const userRoutes = require("./routes/user");
const postsRoutes = require("./routes/posts");

//db
const { sequelize } = require("./models/index");

//Using express
const app = express();

//Create a new morgan logger middleware
//function using the tiny format
app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // CORS - partage de ressources entre serveurs
app.use(helmet()); // helmet

//using bodyParser
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

//path to images
app.use("/upload", express.static(path.join(__dirname, "upload")));
//path to user-related routes
app.use("/api/users", userRoutes);
//path to feed-related routes

app.use("/api/posts", postsRoutes);

const dbTest = async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
dbTest();

module.exports = app;
