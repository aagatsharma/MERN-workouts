import express from "express";
import "dotenv/config";
import router from "./router";
import mongoose from "mongoose";

//express app
const app = express();

//middleware for all
app.use(express.json());

//route
app.use("/", router());

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening on port
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to DB and Listening on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
