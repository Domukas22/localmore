//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const city_SCHEMA = new Schema(
  {
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    country: { type: Schema.ObjectId, ref: "countries", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cities", city_SCHEMA);
