import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// to parse the incoming requests with JSON payload (from req.body)
app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
