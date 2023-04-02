import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

const MONGO_URL = "mongodb+srv://lakrandiayeshani1204:MERNpassword123@cluster0.ubbizur.mongodb.net/recipes?retryWrites=true&w=majority";

async function connectDb() {
    await mongoose.connect(MONGO_URL);
}

connectDb().then(() => console.log("Connected to MongoDB")).catch((err) => console.log("Failed to connect:", err));

app.listen(3001, () => console.log("Server started"));