import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/database";

//Load the environment variables
dotenv.config();

const app = express();   
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Test database connection
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Callout - PAU's incident reporting system"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});