//
console.clear();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const SportsField = require("./models/SportsField");

// Replace the uri string with your MongoDB connection string.
// const uri =
//   "mongodb+srv://admin:simplepassword@localmoredev.ugtw3xp.mongodb.net/?retryWrites=true&w=majority&appName=localmoreDev";

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/sportsfields", async (req, res) => {
  try {
    const sportsfields = await SportsField.find(); // Fetch all sportsfields
    res.json(sportsfields); // Send them as a response
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const x = {
  name: "Blau Hoops",
  type: "court",
  sport: "basketball",
  tags: ["basketball", "wieblingen", "metal net", "2 baskets"],
};
const y = {
  name: "Open Hoops",
  type: "court",
  sport: "basketball",
  tags: ["basketball", "kirchheim", "no net", "1 basket"],
};
const u = {
  name: "Ninja Skates",
  type: "skatepark",
  sport: "skating",
  tags: ["skatepark", "handschuhsheim", "hidden", "quiet"],
};
