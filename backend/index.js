import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello User"
  });
});

app.use("/api/user", UserRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something Went Wrong";
  return res.status(status).json({
    success: false,
    status,
    message
  });
});

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MongoDB_URL)
    .then((res) => console.log("Connected to MongoDB DataBase"))
    .catch((err) => {
      console.log(err);
    });
};

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    connectDB();
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  } catch (err) {
    console.log("Failed to start server:", err);
  }
};

startServer();