//

const mongoose = require("mongoose");

const sportsFieldSchema = new mongoose.Schema({
  name: String,
  type: String,
  sport: String,
  tags: Array,
});

const SportsField = mongoose.model("SportsField", sportsFieldSchema);

module.exports = SportsField;
