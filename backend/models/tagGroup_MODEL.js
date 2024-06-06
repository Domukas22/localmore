//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagGroup_SCHEMA = new Schema(
  {
    marked: {
      val: { type: Boolean, required: true },
      notes: { type: String, required: true },
    },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    desc: { type: String, required: true },
    icon: { type: Schema.Types.ObjectId, ref: "icons", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tag_groups", tagGroup_SCHEMA);
