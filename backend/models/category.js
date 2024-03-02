//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    isCategNew: { type: Boolean },
    parentCateg: [{ type: Schema.ObjectId, ref: "categories" }],
    childCateg: [{ type: Schema.ObjectId, ref: "categories" }],
    slug: { type: String, required: true },
    icon: { type: String, required: true },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", CategorySchema);
