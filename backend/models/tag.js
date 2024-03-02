//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema(
  {
    onProfiles: [
      { type: Schema.ObjectId, ref: "profiles_static", required: true },
    ],
    slug: { type: String, required: true },
    icon: { type: String, required: true },
    name: {
      en: { type: String, required: true },
      de: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tags", TagSchema);
