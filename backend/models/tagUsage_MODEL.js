// create a tagUsage_MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagUsage_SCHEMA = new Schema(
  {
    desc: { type: String, required: true },
    tag_ID: { type: Schema.Types.ObjectId, ref: "tags", required: true },
    category_ID: { type: Schema.Types.ObjectId, ref: "categories", required: true },
    group_ID: { type: Schema.Types.ObjectId, ref: "tag_groups", required: true },
    count: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tag_usages", tagUsage_SCHEMA);
