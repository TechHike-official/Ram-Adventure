import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import googleRoute from "./routes/auth/google.js";
import authRoute from "./routes/auth/auth.js";

mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth/google", googleRoute);
app.use("/auth", authRoute);

app.listen(5000, () => console.log("Backend running on 5000"));
