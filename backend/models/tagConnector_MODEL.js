//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagConnector_SCHEMA = new Schema(
  {
    desc: { type: String, required: true },
    category: { type: Schema.ObjectId, ref: "categories", required: true },
    tag: { type: Schema.ObjectId, ref: "tags", required: true },
    tagGroup: { type: Schema.ObjectId, ref: "tag_groups", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tag_connectors", tagConnector_SCHEMA);
