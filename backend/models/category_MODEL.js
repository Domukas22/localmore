//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category_SCHEMA = new Schema(
  {
    slug: { type: String, required: true },
    IS_endCateg: { type: Boolean, required: true },
    tagGroups: [{ type: Schema.ObjectId, ref: "tag_groups" }],
    IS_new: { type: Boolean },
    city: { type: Schema.ObjectId, ref: "cities", required: true },
    parent_CATEG: { type: Schema.ObjectId, ref: "categories" },
    child_CATEG: [{ type: Schema.ObjectId, ref: "categories" }],
    ancestor_CATEG: [{ type: Schema.ObjectId, ref: "categories" }],
    icon: { type: String, required: true },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", category_SCHEMA);
