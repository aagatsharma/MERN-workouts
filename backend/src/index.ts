import express from "express";
import "dotenv/config";
import router from "./router";
import mongoose from "mongoose";
import cors from "cors";

//express app
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

//middleware for all
app.use(express.json());

//route
app.use("/", router());

//connect to db
mongoose
  // .connect(process.env.MONGO_URI)
  .connect(process.env.MONGO_LOCAL)
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
