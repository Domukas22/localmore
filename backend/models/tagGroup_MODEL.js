//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagGroup_SCHEMA = new Schema(
  {
    desc: { type: String, required: true },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tag_groups", tagGroup_SCHEMA);
