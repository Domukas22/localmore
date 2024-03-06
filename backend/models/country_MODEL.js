//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const country_SCHEMA = new Schema(
  {
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("countries", country_SCHEMA);
