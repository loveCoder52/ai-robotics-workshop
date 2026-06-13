require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./models/db");
const enquiryRoutes = require("./routes/enquiry");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

app.use("/api", enquiryRoutes);

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Workshop API is running." });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ success: false, message: "Internal server error." });
});

const start = async () => {
  if (process.env.MONGO_URI) {
    await connectDB();
  } else {
    console.log(
      "⚠  MONGO_URI not set — running without database (in-memory only)."
    );
  }
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
};

start();
