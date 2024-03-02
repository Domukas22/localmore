const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileStaticSchema = new Schema(
  {
    isProfileNew: { type: Boolean, required: true },
    city: { type: Schema.ObjectId, ref: "tr_static", required: true },
    text: { type: Schema.ObjectId, ref: "tr_static", required: true },
    img: {
      d_front: { type: String, required: true },
      m_front: { type: String, required: true },
      d_all: [{ type: String, required: true }],
      m_all: [{ type: String, required: true }],
    },
    adress: {
      gMaps: { type: String, required: true },
      street: { type: String, required: true },
      region: { type: String, required: true },
      plz: { type: String, required: true },
      coords: {
        type: { type: String, required: true },
        coordinates: [{ type: String, required: true }],
      },
    },
    categories: [{ type: Schema.ObjectId, ref: "category", required: true }],
    tags: [{ type: Schema.ObjectId, ref: "tags", required: true }],
  },
  { collection: "profiles_static" }
);

// Export model.
module.exports = mongoose.model("profiles_static", profileStaticSchema);
