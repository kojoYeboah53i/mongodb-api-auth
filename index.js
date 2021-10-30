//require express
const express = require("express");
const app = express();
const port = process.env.PORT || 6000;
// const { MongoClient }  = require('mongodb');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");


//##### middlewares begin

// use bodyparser
app.use(bodyParser.json());
/**
 *  or app.use (express.json()); works too
 */

//cors
app.use(cors());

// import the routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// routes
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

//######### middlewares end
const dbURL = process.env.DB_CONNECTION;
//connect to the database
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to database successful");
    
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to database");
    console.log(err);
  });
