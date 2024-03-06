//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category_SCHEMA = new Schema(
  {
    new: { type: Boolean, required: true },
    city: { type: Schema.ObjectId, ref: "cities", required: true },
    slug: { type: String, required: true },
    icon: { type: String, required: true },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
    parent_CATEG: { type: Schema.ObjectId, ref: "categories" },
    child_CATEG: [{ type: Schema.ObjectId, ref: "categories" }],
    ancestor_CATEG: [{ type: Schema.ObjectId, ref: "categories" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", category_SCHEMA);
