//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tag_SCHEMA = new Schema(
  {
    new: { type: Boolean, required: true },
    slug: { type: String, required: true },
    icon: { type: String, required: true },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tags", tag_SCHEMA);
