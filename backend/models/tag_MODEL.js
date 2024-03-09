//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tag_SCHEMA = new Schema(
  {
    type: { type: String, required: true, default: "tag" },
    new: { type: Boolean, required: true },
    slug: { type: String, required: true },
    icon: { type: String, required: true },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { timestamps: true, collection: "tags" }
);

const subtag_SCHEMA = new Schema(
  {
    type: { type: String, required: true, default: "subtag" },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    onTags: [{ type: Schema.Types.ObjectId, ref: "tags", required: true }],
  },
  { timestamps: true, collection: "tags" }
);

const tag_MODEL = mongoose.model("Tag", tag_SCHEMA);
const subtag_MODEL = mongoose.model("Subtag", subtag_SCHEMA);

module.exports = { tag_MODEL, subtag_MODEL };

///////////////////////////////
