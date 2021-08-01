const express = require("express");
const morgan = require("morgan"); //HTTP request logger middleware for node.js
const cors = require("cors");
const path = require("path"); // to make path manipulation easier
const helmet = require("helmet"); // injection security
require("dotenv").config();

//routes
const userRoutes = require("./routes/user");
const postsRoutes = require("./routes/posts");

//db
const { sequelize } = require("./models/index");

const app = express();

//Create a new morgan logger middleware
//function using the tiny format
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // CORS - sharing resources between servers
app.use(helmet()); // helmet

app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use("/api/users", userRoutes);
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
