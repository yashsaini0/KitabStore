import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


const app = express();

app.use(cors({
  origin: 'https://your-vercel-app.vercel.app', // Replace with your actual Vercel app domain
}));

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//Connect to MongoDB 
mongoose.connect(URI, {
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("MongoDB connection error:", error));


//Defining Routes
app.use("/book",bookRoute);
app.use("/user",userRoute);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})